FROM nginx:latest
COPY frontend/build /var/www
COPY conf/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]
