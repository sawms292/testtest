# ---- Build stage ----
FROM node:lts-alpine3.23 AS build
WORKDIR /app

RUN npm install -g @angular/cli

COPY package*.json ./
RUN npm ci

COPY . ./
RUN ng build --configuration=production

# ---- Runtime stage ----
FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d/default.conf
COPY ssl/ /etc/nginx/conf.d/

# NOTE: adjust the dist folder name if your Angular project name differs
COPY --from=build /app/dist/Frontend/browser /usr/share/nginx/html

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
