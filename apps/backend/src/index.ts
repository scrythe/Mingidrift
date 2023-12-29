import Fastify from "fastify";

const port = parseInt(process.env.PORT ?? "3000");
const enviroment =
  process.env.NODE_ENV == "production" ? "production" : "development";

const envToLogger = {
  production: true,
  development: {
    transport: {
      target: "pino-pretty",
      options: {
        translateTime: "HH:MM:ss Z",
        ignore: "pid,hostname",
      },
    },
  },
};

console.log("hohoo");
console.log(enviroment);

const fastify = Fastify({
  logger: envToLogger[enviroment],
});

fastify.get("/", () => {
  return { message: "Hello World!" };
});

const start = async () => {
  try {
    fastify.listen({ port, host: "0.0.0.0" });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
