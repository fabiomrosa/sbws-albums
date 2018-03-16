FROM node:8.10.0

# use cached layer for node modules
COPY ./package*.json /tmp/
RUN cd /tmp && npm install
RUN mkdir -p /usr/src/app && cp -a /tmp/node_modules /usr/src/app

# add project files
WORKDIR /usr/src/app

EXPOSE 3000