FROM node:18-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS build
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml /app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm fetch
COPY apps /app/apps
COPY packages /app/packages
RUN pnpm install -r --frozen-lockfile
RUN pnpm run -r build
RUN pnpm deploy --filter=backend --prod /prod/backend

FROM nginx AS frontend
WORKDIR /usr/share/nginx/html
COPY --from=build /app/apps/frontend/dist .

FROM base AS backend
WORKDIR /app
COPY --from=build /prod/backend /app
ENV NODE_ENV=production
EXPOSE 3000
CMD [ "pnpm", "start" ]
