FROM node:17

WORKDIR /home/api

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

CMD yarn start:dev