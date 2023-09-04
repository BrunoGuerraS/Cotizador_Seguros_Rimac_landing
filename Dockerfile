FROM node:18

RUN apt-get update && apt-get install -y nginx

COPY dist /var/www/react-project
COPY default.conf /etc/nginx/conf.d/

CMD ["nginx", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]