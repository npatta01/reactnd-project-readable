# fronted artifacts
FROM node:8 AS frontend
WORKDIR /src
ADD frontend/package.json .
RUN yarn --production
ADD frontend/ .
RUN yarn build


# server artifacts
FROM node:8 AS backend
WORKDIR /src
ADD api-server/package.json .
RUN yarn --production
ADD api-server/ .
COPY --from=frontend /src/build build
CMD node server.js
