FROM node:25

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

RUN npm run tsc

CMD ["node", "build/src/index.js"]
#CMD ["/bin/bash"]