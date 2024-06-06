在进行项目开发时，都会用到版本控制工具，如Git等，下面将从Git仓库的创建、Git常用的基本命令、Git的分支管理、Git查看提交历史、Git 标签、Git 远程仓库来介绍Git的相关 命令。下面所涉及的命令都是在Git bash中操作的，所以必须先安装Git。

| 命令                                                         | 含义                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| git init                                                     | 使用当前目录作为Git仓库                                      |
| git init dir_name                                            | 在指定的目录下生成仓库                                       |
| git clone url                                                | 从Git仓库拷贝项目                                            |
| git config --global user.name '你的用户名' <br />git config --global user.email '你的邮箱' | 配置用户名和邮箱地址                                         |
| git add                                                      | 将文件添加到缓存                                             |
| git status                                                   | 查看相关文件的状态                                           |
| git commit -m "第一次版本提交"                               | 将缓存区内容添加到仓库中，可以在后面加-m选项，以在命令行中提供提交注释 |
| git remote add [alias] [url]                                 | 添加一个远程仓库                                             |
| git remote -v                                                | 查看当前的远程仓库                                           |
| git pull                                                     | 拉取远程仓仓库,从远程获取最新版本并merge到本地               |
| git push origin branch_name                                  | 推送到远程仓库                                               |

