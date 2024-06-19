#### 1. 系统环境
系统是基于centos开发的openeuler

#### 2. 场景

##### 2.1. 在openeuler下使用docker拉取redis时发生错误

```shell
[root@localhost /]# docker pull redis
Using default tag: latest
latest: Pulling from library/redis
09f376ebb190: Retrying in 1 second 
9ae6a7172b01: Retrying in 1 second 
2c310454138b: Retrying in 1 second 
3eba9ec960aa: Waiting 
3d36c165ff0a: Waiting 
493d196d734f: Waiting 
4f4fb700ef54: Waiting 
484e0560ae90: Waiting 
error pulling image configuration: download failed after attempts=6: dial tcp 115.126.100.160:443: i/o timeout
```

##### 2.2. 解决方案

使用docker info 查看，没有Registry Mirrors，也就是没有配置镜像加速器。分析后发现国内从 DockerHub 拉取镜像有时会遇到困难，由于网络原因，下载一个Docker官方镜像可能会需要很长的时间，甚至下载失败，应该配置镜像加速器。Docker 官方和国内很多云服务商都提供了国内加速器服务，我在此次选择了阿里云。

针对Docker客户端版本大于 1.10.0的情况，可以通过修改daemon配置文件/etc/docker/daemon.json来使用加速器。在openeuler中执行下列命令：

```shell
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://${加速器地址}"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

执行完上述命令后，重新执行docker pull redis成功了。