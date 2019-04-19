FROM node:8-alpine

RUN apk add --update \
  bash \
  git \
  python \
  make \
  && rm -rf /var/cache/apk/*

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY . /app/

RUN npm run build

CMD npm run start
