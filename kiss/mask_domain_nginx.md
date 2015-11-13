# mask domain name using nginx proxy

this one was a little bit hard for me at first

domain provider:

A Record to your server ip:

nginx:

server {
    listen 80;
    server_name kissjavascript.com;

    location / {
        proxy_pass http://127.0.0.1:1000;
    }
    
}
