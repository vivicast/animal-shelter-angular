FROM node:14 AS builder
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build:ci

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist/animal-shelter-angular .
ENTRYPOINT ["nginx", "-g", "daemon off;"]