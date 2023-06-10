
FROM node:alpine as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine AS prod
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
#EXPOSE 80
# run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]