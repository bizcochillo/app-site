FROM node:16

WORKDIR /site

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "app.js" ]