FROM node:25

WORKDIR /app

COPY */package*.json .

RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build:frontend
RUN npm run build:backend
RUN cp -r frontend/dist ./build

#CMD ["node", "build/src/index.js"]
CMD ["/bin/bash"]