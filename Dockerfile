FROM node:16-slim

WORKDIR /app
EXPOSE 80

COPY package.json .

RUN npm install
RUN npm install nodemon -g

COPY . .

CMD ["nodemon", "connect.js"]