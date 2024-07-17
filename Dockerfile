FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod
FROM nginx:alpine
COPY --from=builder /app/dist/certif-scolarite /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx","-g","daemon off;" ]
