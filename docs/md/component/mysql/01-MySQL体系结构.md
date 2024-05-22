#### 1. 









---

参考资料

[1] [MySQL 8.0 参考手册_MySQL 8.0 参考手册](https://mysql.net.cn/doc/refman/8.0/en/)

[2] Silvia Botros / Jeremy Tinley.高性能Mysql(第四版)[M].电子工业出版社.2022



docker run \           
--restart=always \     #这个参数是mysql在docker启动的时候，也会跟着自动启动
--name mysql8.0 \      #这个参数是mysql容器的名字
-p 3306:3306 \         #这个参数是端口号映射
-v 自己的文件夹路径:/var/lib/mysql \ #路径举例：/root/mysql/data 自己创建的存储mysql数据的文件
-e MYSQL_ROOT_PASSWORD=root \     #这个参数是是设置用户名为root  密码为root
-d mysql:8.0.22                   #-d参数是后台运行    

docker run --name mysql8.0 -p 3306:3306 -v /app/mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root -d mysql:latest