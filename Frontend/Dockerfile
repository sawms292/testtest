FROM node:lts-alpine3.23 AS base
WORKDIR /app
RUN npm install -g @angular/cli

COPY package*.json ./
RUN npm ci


FROM base AS dev
WORKDIR /app
COPY . ./
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]


FROM base AS build
WORKDIR /app
COPY . .
RUN ng build --configuration=production


FROM nginx:alpine AS prod
RUN rm /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d/default.conf
COPY ssl/ /etc/nginx/conf.d/

# NOTE: adjust the dist folder name if your Angular project name differs
COPY --from=build /app/dist/Frontend/browser /usr/share/nginx/html

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
