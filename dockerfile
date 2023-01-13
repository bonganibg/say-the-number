FROM node:alpine AS say-the-number-build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM nginx:alpine
COPY --from=say-the-number-build /app/dist/say-the-number /usr/share/nginx/html
