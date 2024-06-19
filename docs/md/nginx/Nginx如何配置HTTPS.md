## Nginx如何配置HTTPS

#### 1.项目背景

​	SpringBoot+Vue前后端分离项目，使用dockerfile进行部署，前后端独立部署，前端由node.js运行

#### 2.SSL证书

​	通过阿里云进行申请的免费ssl证书，将申请后签发的证书下载到本地，下载nginx服务器所需的证书，解压后可得到两个文件：	证书文件cert-file-name.pem,证书私钥cert-file-name.key文件。上述cert-file-name在实际操作过程中，必须使用真	实的证书文件名称进行替换，此处只是示例代码。

#### 3.上传SSL证书至服务器，使用scp命令。

#### 4.修改nginx.conf配置文件

​	4.1.80端口是http协议默认端口，https端口是443；

​	4.2.找到配置文件中http{...}的内容

​	SSL配置

```json
server {
        listen       443 ssl;
        server_name  localhost; #（改）将localhost修改为您证书绑定的域名，例如：www.example.com
        ssl_certificate cert-file-name.pem; #（改）证书文件存放目录，将xx.pem替换成实际证书的文件名。
        ssl_certificate_key cert-file-name.key; #（改）证书文件存放目录，将xx.key替换成实际证书的文件名。

        location / {
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header Host $http_host;
                proxy_pass http://127.0.0.1:8081; #（改）宿主机前端对应的端口地址
        }
    }

```



```json
server {
    listen       port ssl; #（改）port替换为前端项目配置的实际后台请求地址中的端口号
    server_name  localhost; #（改）将localhost修改为您证书绑定的域名，例如：www.example.com
    ssl_certificate cert-file-name.pem; #（改）证书文件存放目录，将xx.pem替换成实际证书的文件名。
    ssl_certificate_key cert-file-name.key; #（改）证书文件存放目录，将xx.key替换成实际证书的文件名。


    location / {
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header Host $http_host;
            proxy_pass http://127.0.0.1:8080; #（改）宿主机后端对应的端口地址
    }
}
```



**http不再使用则将原来的80端口监听的server改成重定向https的内容，访问http时将自动跳转到https，若http保持使用则可不添加该server。**

```json
http{
  ...
  
    #重定向https
    server {
        listen 80;
        server_name localhost;   #（改）将localhost修改为您证书绑定的域名，例如：www.example.com。
        rewrite ^(.*)$ https://$host$1 permanent;   #将所有http请求通过rewrite重定向到https。
        location / {
                 index index.html index.htm;
        }
    }

  ...
}

```

#### 5.启动nginx

`nginx -t`

`nginx -s reload`





