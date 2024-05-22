#### 1. 查看虚拟机系统信息

`cat /etc/os-release`

```shell
[root@localhost /]# cat /etc/os-release
NAME="openEuler"
VERSION="22.03 (LTS-SP2)"
ID="openEuler"
VERSION_ID="22.03"
PRETTY_NAME="openEuler 22.03 (LTS-SP2)"
ANSI_COLOR="0;31"

```

#### 2. 安装yum-utils工具

`sudo yum install -y yum-utils`

```shell
[root@localhost ~]# yum install -y yum-utils
OS                                                                                                                                                            9.5 kB/s | 2.3 kB     00:00    
everything                                                                                                                                                     11 kB/s | 2.4 kB     00:00    
EPOL                                                                                                                                                           10 kB/s | 2.3 kB     00:00    
debuginfo                                                                                                                                                      10 kB/s | 2.3 kB     00:00    
source                                                                                                                                                         10 kB/s | 2.3 kB     00:00    
update                                                                                                                                                        9.1 kB/s | 2.2 kB     00:00    
update                                                                                                                                                        9.0 MB/s |  35 MB     00:03    
update-source                                                                                                                                                 9.2 kB/s | 2.2 kB     00:00    
update-source                                                                                                                                                 1.2 MB/s | 724 kB     00:00    
No match for argument: yum-utils
Error: Unable to find a match: yum-utils
```

报错，发现系统自带`yum-config-manager`

```
[root@localhost /]# which yum-config-manager
/usr/bin/yum-config-manager
[root@localhost /]# cd /usr/bin
[root@localhost bin]# ls -il| grep 'yum-config-manager'
1857964 lrwxrwxrwx. 1 root root           22  6月 28  2023 yum-config-manager -> /usr/libexec/dnf-utils
```

发现openEuler自带`dnf`包管理器，它直接建立一个链接指向`dnf-utils`

#### 3. 使用国内镜像源(华为云)

```shell
sudo yum-config-manager --add-repo https://repo.huaweicloud.com/docker-ce/linux/centos/docker-ce.repo
```

```
sudo sed -i 's+download.docker.com+repo.huaweicloud.com/docker-ce+' /etc/yum.repos.d/docker-ce.repo
```

#### 4. 更新建立缓存

```shell
[root@localhost ~]# sudo yum makecache
Docker CE Stable - x86_64                                                                                                                                     1.2 kB/s | 394  B     00:00    
Errors during downloading metadata for repository 'docker-ce-stable':
  - Status code: 404 for https://repo.huaweicloud.com/docker-ce/linux/centos/22.03LTS_SP2/x86_64/stable/repodata/repomd.xml (IP: 116.207.180.43)
Error: 为仓库 'docker-ce-stable' 下载元数据失败 : Cannot download repomd.xml: Cannot download repodata/repomd.xml: All mirrors were tried
```

#### 5. 错误分析

`cat /etc/yum.repos.d/docker-ce.repo`

```shell
[root@localhost ~]# cat /etc/yum.repos.d/docker-ce.repo
[docker-ce-stable]
name=Docker CE Stable - $basearch
baseurl=https://repo.huaweicloud.com/docker-ce/linux/centos/$releasever/$basearch/stable
enabled=1
gpgcheck=1
gpgkey=https://repo.huaweicloud.com/docker-ce/linux/centos/gpg

[docker-ce-stable-debuginfo]
name=Docker CE Stable - Debuginfo $basearch
baseurl=https://repo.huaweicloud.com/docker-ce/linux/centos/$releasever/debug-$basearch/stable
enabled=0
gpgcheck=1
gpgkey=https://repo.huaweicloud.com/docker-ce/linux/centos/gpg

[docker-ce-stable-source]
name=Docker CE Stable - Sources
baseurl=https://repo.huaweicloud.com/docker-ce/linux/centos/$releasever/source/stable
enabled=0
gpgcheck=1
gpgkey=https://repo.huaweicloud.com/docker-ce/linux/centos/gpg

[docker-ce-test]
name=Docker CE Test - $basearch
baseurl=https://repo.huaweicloud.com/docker-ce/linux/centos/$releasever/$basearch/test
enabled=0
gpgcheck=1
gpgkey=https://repo.huaweicloud.com/docker-ce/linux/centos/gpg

[docker-ce-test-debuginfo]
name=Docker CE Test - Debuginfo $basearch
baseurl=https://repo.huaweicloud.com/docker-ce/linux/centos/$releasever/debug-$basearch/test
enabled=0
gpgcheck=1
gpgkey=https://repo.huaweicloud.com/docker-ce/linux/centos/gpg

[docker-ce-test-source]
name=Docker CE Test - Sources
baseurl=https://repo.huaweicloud.com/docker-ce/linux/centos/$releasever/source/test
enabled=0
gpgcheck=1
gpgkey=https://repo.huaweicloud.com/docker-ce/linux/centos/gpg

[docker-ce-nightly]
name=Docker CE Nightly - $basearch
baseurl=https://repo.huaweicloud.com/docker-ce/linux/centos/$releasever/$basearch/nightly
enabled=0
gpgcheck=1
gpgkey=https://repo.huaweicloud.com/docker-ce/linux/centos/gpg

[docker-ce-nightly-debuginfo]
name=Docker CE Nightly - Debuginfo $basearch
baseurl=https://repo.huaweicloud.com/docker-ce/linux/centos/$releasever/debug-$basearch/nightly
enabled=0
gpgcheck=1
gpgkey=https://repo.huaweicloud.com/docker-ce/linux/centos/gpg

[docker-ce-nightly-source]
name=Docker CE Nightly - Sources
baseurl=https://repo.huaweicloud.com/docker-ce/linux/centos/$releasever/source/nightly
enabled=0
gpgcheck=1
gpgkey=https://repo.huaweicloud.com/docker-ce/linux/centos/gpg
```

其中 `$releasever`代表当前系统的版本， `$basearch`代表当前系统的架构

由于使用`CentOS`中的`Docker`软件源安装，且https://repo.huaweicloud.com/docker-ce/linux/centos/中没有名为`20.03LTS_SP1`的版本，所以需要手动改成需要的版本，将`$releasever`全部替换为`7`

#### 6. 更新建立缓存

`sudo yum makecache`

```shell
[root@localhost ~]# sudo yum makecache
Docker CE Stable - x86_64                                                                                                                                     381 kB/s |  77 kB     00:00    
OS                                                                                                                                                            9.6 kB/s | 2.3 kB     00:00    
everything                                                                                                                                                     10 kB/s | 2.3 kB     00:00    
EPOL                                                                                                                                                           10 kB/s | 2.3 kB     00:00    
debuginfo                                                                                                                                                      10 kB/s | 2.3 kB     00:00    
source                                                                                                                                                        9.3 kB/s | 2.3 kB     00:00    
update                                                                                                                                                        9.4 kB/s | 2.2 kB     00:00    
update-source                                                                                                                                                 9.9 kB/s | 2.2 kB     00:00    
Metadata cache created.
```

#### 7. 安装Docker

`sudo yum install docker-ce docker-ce-cli containerd.io`

```shell
[root@localhost ~]# sudo yum install docker-ce docker-ce-cli containerd.io
Last metadata expiration check: 0:00:10 ago on 2024年05月22日 星期三 17时21分03秒.
Dependencies resolved.
==============================================================================================================================================================================================
 Package                                               Architecture                       Version                                          Repository                                    Size
==============================================================================================================================================================================================
Installing:
 containerd.io                                         x86_64                             1.6.31-3.1.el7                                   docker-ce-stable                              35 M
 docker-ce                                             x86_64                             3:26.1.3-1.el7                                   docker-ce-stable                              27 M
 docker-ce-cli                                         x86_64                             1:26.1.3-1.el7                                   docker-ce-stable                              15 M
Installing dependencies:
 container-selinux                                     noarch                             2:2.138-5.oe2203sp2                              OS                                            36 k
 docker-buildx-plugin                                  x86_64                             0.14.0-1.el7                                     docker-ce-stable                              14 M
 docker-ce-rootless-extras                             x86_64                             26.1.3-1.el7                                     docker-ce-stable                             9.4 M
 docker-compose-plugin                                 x86_64                             2.27.0-1.el7                                     docker-ce-stable                              13 M
 fuse-overlayfs                                        x86_64                             1.12-1.oe2203sp2                                 EPOL                                          57 k
 fuse3                                                 x86_64                             3.10.5-6.oe2203sp2                               OS                                           114 k
 libcgroup                                             x86_64                             2.0.3-2.oe2203sp2                                OS                                           100 k
 libslirp                                              x86_64                             4.7.0-2.oe2203sp2                                OS                                            70 k
 slirp4netns                                           x86_64                             1.2.0-1.oe2203sp2                                EPOL                                          46 k
Installing weak dependencies:
 fuse3-help                                            x86_64                             3.10.5-6.oe2203sp2                               OS                                            13 k

Transaction Summary
==============================================================================================================================================================================================
Install  13 Packages

Total download size: 114 M
Installed size: 401 M
Is this ok [y/N]: y
```

#### 8. 启动及查看状态

`systemctl start docker.service`

`systemctl status docker`

```shell
[root@localhost ~]# systemctl start docker.service
[root@localhost ~]# systemctl status docker
● docker.service - Docker Application Container Engine
     Loaded: loaded (/usr/lib/systemd/system/docker.service; disabled; vendor preset: disabled)
     Active: active (running) since Wed 2024-05-22 17:22:38 CST; 49s ago
TriggeredBy: ● docker.socket
       Docs: https://docs.docker.com
   Main PID: 2147 (dockerd)
      Tasks: 10
     Memory: 32.8M
     CGroup: /system.slice/docker.service
             └─ 2147 /usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock

5月 22 17:22:38 localhost.localdomain systemd[1]: Starting Docker Application Container Engine...
5月 22 17:22:38 localhost.localdomain dockerd[2147]: time="2024-05-22T17:22:38.092724926+08:00" level=info msg="Starting up"
5月 22 17:22:38 localhost.localdomain dockerd[2147]: time="2024-05-22T17:22:38.133549229+08:00" level=info msg="Loading containers: start."
5月 22 17:22:38 localhost.localdomain dockerd[2147]: time="2024-05-22T17:22:38.494990216+08:00" level=info msg="Firewalld: interface docker0 already part of docker zone, returning"
5月 22 17:22:38 localhost.localdomain dockerd[2147]: time="2024-05-22T17:22:38.575754598+08:00" level=info msg="Loading containers: done."
5月 22 17:22:38 localhost.localdomain dockerd[2147]: time="2024-05-22T17:22:38.597309759+08:00" level=info msg="Docker daemon" commit=8e96db1 containerd-snapshotter=false storage-driver=ove>
5月 22 17:22:38 localhost.localdomain dockerd[2147]: time="2024-05-22T17:22:38.597419554+08:00" level=info msg="Daemon has completed initialization"
5月 22 17:22:38 localhost.localdomain dockerd[2147]: time="2024-05-22T17:22:38.644975363+08:00" level=info msg="API listen on /run/docker.sock"
5月 22 17:22:38 localhost.localdomain systemd[1]: Started Docker Application Container Engine.

```

