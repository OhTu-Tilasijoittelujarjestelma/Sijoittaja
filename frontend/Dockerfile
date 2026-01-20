FROM node:20
WORKDIR /usr/src/app/frontend

# Install the application dependencies
COPY package* ./
RUN npm ci
# Copy in the source code
COPY . .

RUN chmod -R 777 *

RUN npm run build

# Expose port WIP
EXPOSE 4173 
CMD [ "npm",  "run", "preview", "--", "--host"]

#alla oleva buildaa imagen, toimii vain toukon käyttäjällä (ehkä)
# docker build frontend/ -t l0uko/sijoittaja-frontend

#runnin pitäisi toimia kaikilla
# docker run -t -p 4173:4173 l0uko/sijoittaja-frontend:latest 
