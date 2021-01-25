FROM node:14.15.4-alpine

ARG ENVIRONMENT
RUN npm install -g http-server

ENV INSTALL_PATH /frontend-challenge
WORKDIR $INSTALL_PATH

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run ${ENVIRONMENT}

EXPOSE 8080
CMD [ "http-server", "dist" ]