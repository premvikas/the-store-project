FROM node:19.5.0-alpine as development

ENV MONGO_ENV mongo

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:19.5.0-alpine  as production

ARG NODE_ENV=production
ARG MONGO_ENV=mongo
ENV NODE_ENV=${NODE_ENV}
ENV MONGO_ENV=${MONGO_ENV}

WORKDIR /app

COPY package*.json .

RUN npm install --only=production

COPY --from=development /app/dist ./dist

EXPOSE 3001

CMD [ "node", "dist/index.js" ]
