FROM node:18-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS build
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .
COPY apps/frontend/package.json apps/frontend/
COPY packages/game/package.json packages/game/
RUN pnpm --filter=frontend install --frozen-lockfile
COPY apps/frontend apps/frontend
COPY packages/game packages/game
RUN pnpm --filter=game build
RUN pnpm --filter=frontend build

FROM nginx AS frontend
WORKDIR /usr/share/nginx/html
COPY --from=build /app/apps/frontend/dist .
