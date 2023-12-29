FROM node:18-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS build
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .
COPY apps/backend/package.json apps/backend/
RUN pnpm --filter=backend install --frozen-lockfile
COPY apps/backend apps/backend
RUN pnpm --filter=backend build
RUN pnpm deploy --filter=backend --prod /prod

FROM base AS backend
WORKDIR /app
COPY --from=build /prod .
ENV NODE_ENV=production
CMD [ "pnpm", "start" ]
