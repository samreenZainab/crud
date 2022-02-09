FROM node:latest

WORKDIR /CRUD/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node" , "start "] 