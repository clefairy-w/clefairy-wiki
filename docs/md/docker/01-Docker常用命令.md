#### 1. 启动docker

```shell
systemctl start docker.service
```

#### 2. 查看docker状态

```shell
systemctl status docker
```

#### 3. 拉取镜像

```shell
docker pull mysql # 拉取最新镜像, docker pull mysql:8.0.22
```

#### 4. 查看镜像

```shell
docker images
```

#### 5. 创建容器

```shell
docker run \           
--restart=always \     #这个参数是mysql在docker启动的时候，也会跟着自动启动
--name mysql8.0 \      #这个参数是mysql容器的名字
-p 3306:3306 \         #这个参数是端口号映射
-v 自己的文件夹路径:/var/lib/mysql \ #路径举例：/root/mysql/data 自己创建的存储mysql数据的文件
-e MYSQL_ROOT_PASSWORD=root \     #这个参数是是设置用户名为root  密码为root
-d mysql:8.0.22                   #-d参数是后台运行    
```

#### 6. 查看容器

```shell
docker ps
```



