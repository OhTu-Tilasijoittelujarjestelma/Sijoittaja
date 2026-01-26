FROM node:20
WORKDIR /usr/src/app/backend

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

RUN chmod -R 777 *

RUN npm run tsc

CMD [ "npm", "run", "start"]