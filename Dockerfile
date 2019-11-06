FROM node:10-alpine AS builder

WORKDIR /app

COPY package.json .
RUN npm i

COPY . .

RUN npm run build    

FROM node:10-alpine

COPY --from=builder /app/build /app/build

RUN npm install -g serve

CMD [ "serve","-l","3000","-s","app/build" ]