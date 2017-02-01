FROM node:6.9.4

RUN mkdir -p -v /app && dir
ADD ./package.json /app/package.json
RUN cd /app && npm install
ADD . /app/
WORKDIR /app
