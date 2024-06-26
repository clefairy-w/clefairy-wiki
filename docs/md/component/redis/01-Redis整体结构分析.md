Redis在网络通信、CPU使用、内存组织、存储持久化四大方面有着非常经典的设计，非常值得深入研究和学习。

Redis 单线程是指它对网络 IO 和数据读写的操作采用了一个线程，而采用单线程的一个核心原因是避免多线程开发的并发控制问题。单线程的 Redis 也能获得高性能，一方面是它采用了高效的数据结构，例如哈希和跳表；另一方面是因为Redis 采用了多路复用机制，这里“多路”是指多个网络连接客户端，“复用”是指复用同一个线程来检查多个Socket的就绪状态。多路复用是在单个线程中通过记录跟踪每一个socket（I/O流）的状态来管理处理多个I/O流，避免了 accept() 和 send()/recv() 潜在的网络 IO 操作阻塞点，使其在网络 IO 操作中能并发处理大量的客户端请求，实现高吞吐率。

但是除了上述的主要操作线程，Redis 还启动了 3 个线程来执行文件关闭、AOF 同步写和惰性删除等操作。

#### 1. 基本架构



#### 2. 问题画像