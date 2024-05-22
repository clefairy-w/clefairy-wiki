* 原子操作：不能被中断的一个或一系列操作

#### 1.定义

CAS是实现原子操作的一种方法，Compare And Swap，CAS操作需要输入两个值，一个旧值，一个新值。在操作期间先比较一下旧值有没有发生变化，如果没有发生变化，则交换成新值；如果发生变化了，则不进行交换。

#### 2. 实现原理

Java中的CAS操作时利用了处理器提供的CMPXCHG指令实现的。

#### 3. 结合原子类

* 原子更新基本数据类型: AtomicBoolean、AtomicInteger、AtomicLong

* 原子更新数组类型: AtomicIntegerArray、AtomicLongArray、AtomicReferenceArray

* 原子更新引用类型: AtomicReference

#### 4. CAS的副作用

* ABA问题->解决方案在变量前追加版本号
* 循环时间长开销大
* 只能保证一个共享变量的原子操作->JDK提供了AtomicReference来保证引用对象之间的原子性，可以把多个变量放在一个对象里来进行CAS操作