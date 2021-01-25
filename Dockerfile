FROM node:14.15.4-alpine

RUN npm install -g http-server

ENV INSTALL_PATH /frontend-challenge
WORKDIR $INSTALL_PATH

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]