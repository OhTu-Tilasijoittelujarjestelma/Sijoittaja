FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000
ENV NODE_ENV=production
ENV DATABASE_URL="postgres://postgres:example@host.docker.internal:5432/postgres"
RUN npm run tsc

CMD ["node", "build/src/index.js"]