FROM node:18


WORKDIR /Frontend

COPY package*.json ./

RUN npm install

COPY . /Frontend

EXPOSE 3000

CMD ["npm", "start"]