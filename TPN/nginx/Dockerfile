FROM alpine:3.11.5
RUN apt-get update && apt-get install -y \
  nginx \
  && rm -rf /var/lib/apt/lists/*
EXPOSE 80
COPY custom.conf /etc/nginx/conf.d/default.conf
CMD ["nginx","-g","daemon off;"]