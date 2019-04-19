FROM node:11-alpine

RUN mkdir /truffle
WORKDIR /truffle

COPY truffle.js /truffle/
COPY package.json /truffle/

RUN mkdir /truffle/contracts
RUN mkdir /truffle/migrations
RUN mkdir /truffle/test

RUN npm install

COPY . /truffle/

ENV TRUFFLE_VERSION=5.0.9

RUN npm install -g \
  truffle@${TRUFFLE_VERSION}

CMD npm run build