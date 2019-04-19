FROM node:10-alpine

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

RUN npm run build --only=prod

EXPOSE 80

CMD npm run start
