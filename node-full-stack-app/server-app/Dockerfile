FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --production

COPY . .

CMD [ "node", "index.js" ]

EXPOSE 3050