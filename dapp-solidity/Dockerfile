FROM node:10-alpine

RUN apk add --update \
  bash \
  git \
  python \
  gcc \
  make \
  g++ \
  zlib-dev \
  && rm -rf /var/cache/apk/*


RUN mkdir /truffle
WORKDIR /truffle

COPY package.json /truffle/

RUN npm install

COPY . /truffle/

ENV TRUFFLE_VERSION=5.0.9

RUN npm install -g \
  truffle@${TRUFFLE_VERSION}

CMD npm run build