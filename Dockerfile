# syntax=docker/dockerfile:1

FROM node:lts-alpine

WORKDIR /app

ADD ./src ./src
ADD ./package.json ./package.json
RUN npm install --omit=dev

# node app entry point
ENTRYPOINT node ./src/main.js
