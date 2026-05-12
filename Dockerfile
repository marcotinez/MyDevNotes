FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM caddy:2-alpine
COPY --from=build /app/dist /usr/share/caddy
EXPOSE 8686
CMD ["caddy", "file-server", "--listen", ":8686", "--root", "/usr/share/caddy"]
