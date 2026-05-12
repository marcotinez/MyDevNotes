FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM alpine:3.20

WORKDIR /app

COPY --from=build /app/dist ./dist

EXPOSE 8686

CMD ["/bin/sh", "-c", "busybox httpd -f -p ${PORT:-8686} -h /app/dist"]
