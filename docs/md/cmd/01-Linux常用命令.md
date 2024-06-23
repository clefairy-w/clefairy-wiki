Linux是一个强大的操作系统，它提供了许多常用的命令行工具，这些命令可以帮助我们用于管理文件、目录、进程、网络和系统配置等。

| 命令                                                         | 含义                                                     |
| ------------------------------------------------------------ | -------------------------------------------------------- |
| ls                                                           | 列出当前目录中的文件和子目录                             |
| pwd                                                          | 显示当前工作目录的路径                                   |
| cd /path/to/directory                                        | 切换工作目录                                             |
| mkdir directory_name                                         | 创建新目录                                               |
| rmdir directory_name                                         | 删除空目录                                               |
| rm file_name                                                 | 删除文件                                                 |
| rm -r directory_name                                         | 递归删除目录及其内容                                     |
| cp source_file destination                                   | 复制文件                                                 |
| cp -r source_directory destination                           | 递归复制目录及其内容                                     |
| mv old_name new_name                                         | 移动或重命名文件或目录                                   |
| touch file_name                                              | 创建空文件或更新文件的时间戳                             |
| cat file_name                                                | 显示文件内容                                             |
| more file_name <br />less file_name                          | 逐页显示文本文件内容                                     |
| head -n 10 file_name                                         | 显示文件的前10行                                         |
| tail -n 20 file_name                                         | 显示文件的后20行                                         |
| grep search_term file_name                                   | 在文件中搜索指定文本                                     |
| ps aux                                                       | 显示当前运行的进程                                       |
| kill process_id                                              | 终止进程                                                 |
| ifconfig                                                     | 查看和配置网络接口信息                                   |
| ping host_name_or_ip                                         | 测试与主机的连通性                                       |
| wget URL <br />curl -O URL                                   | 从网络下载文件                                           |
| chmod permissions file_name                                  | 修改文件或目录的权限                                     |
| tar -czvf archive.tar.gz directory_name                      | 压缩目录                                                 |
| tar -xzvf archive.tar.gz                                     | 解压文件                                                 |
| df -h                                                        | 显示磁盘空间使用情况                                     |
| du -h directory_name                                         | 显示目录的磁盘使用情况                                   |
| top                                                          | 显示系统资源的实时使用情况和进程信息                     |
| ssh username@remote_host                                     | 远程登录到其他计算机                                     |
| mysql -u username -p                                         | 连接到MySQL数据库                                        |
| scp local_file remote_user@remote_host:/remote/directory<br />scp remote_user@remote_host:/remote/file local_directory | 安全地将文件从本地复制到远程主机，或从远程主机复制到本地 |
| find /path/to/search -name "file_pattern"                    | 在文件系统中查找文件和目录                               |
| grep -r "pattern" /path/to/search                            | 在文本中搜索匹配的行，并可以使用正则表达式进行高级搜索   |
| ssh-keygen -t rsa                                            | 生成SSH密钥对，用于身份验证远程服务器                    |
| echo "Hello, World!"                                         | 将文本输出到标准输出                                     |
| curl -X GET http://example.com                               | 用于与网络资源进行交互，支持各种协议                     |
| history                                                      | 查看命令历史记录                                         |

