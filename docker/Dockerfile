FROM node:20 as base
RUN npm install -g pnpm

COPY ../ /app
WORKDIR /app

FROM base as base_build

RUN sh -c 'yes | pnpm install'

