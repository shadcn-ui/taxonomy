FROM node:14

WORKDIR /app

COPY package.json tsconfig.json pnpm-lock.yaml /app/

RUN npm install -g pnpm && pnpm install

COPY . /app/

EXPOSE 3000

CMD ["pnpm", "dev"]
