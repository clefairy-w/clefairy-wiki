`Queue`是一个接口，继承`Collection`

- **add()** - 插入元素，成功返回`true`，失败抛出异常。
- **offer()** - 插入元素，成功返回`true`，失败返回`false`。
- **element()** - 返回队首的元素，如果元素是空的抛出异常。
- **peek()** - 返回队首的元素，如果队列是空返回`null`。
- **remove()** - 返回并移除队首的元素，如果元素是空的抛出异常。
- **poll()** - 返回并移除队首的元素，如果队列是空返回`null`。

#### 1. PriorityQueue

添加到 PriorityQueue 队列里面的元素都经过了排序处理，默认按照自然顺序，**优先队列的作用是保证每次取出的元素都是队列中权值最小的。**

```java
// Priority Queue implementation of Queue
Queue<String> animal1 = new PriorityQueue<>();
```

```java
// Creating a priority queue
PriorityQueue<Integer> numbers = new PriorityQueue<>();

// Using the add() method
numbers.add(4);
numbers.add(2);
System.out.println("PriorityQueue: " + numbers);

// Using the offer() method
numbers.offer(1);
System.out.println("Updated PriorityQueue: " + numbers);

// output
// PriorityQueue: [2, 4]
// Updated PriorityQueue: [1, 4, 2]
```

小顶堆

大顶堆

#### 2. ArrayDeque

```java
// Array implementation of Queue
Queue<String> animal2 = new ArrayDeque<>();
animal2.push("Cat");
animal2.push("Dog");
```

ArrayDeque里维护了两个指针，一个head，一个tail，还维护了一个Object[]。

ArrayDeque的`push`方法是`addFirst`,`offer`方法是`addLast`。

#### 3. LinkedList

```java
// LinkedList implementation of Queue
Queue<Integer> animal3 = new LinkedList<>();
queue.offer(1);
queue.offer(2);
queue.offer(3);
```

LinkedList一个节点存储数据本身，还包括前一个节点prev，后一个节点next。

LinkedList的`offer`是调用`linkLast`方法。

#### 4. BlockingQueue

```java
ArrayBlockingQueue<Integer> blockingQueue = new ArrayBlockingQueue<>(5);
blockingQueue.offer(1);
blockingQueue.offer(2);
System.out.println(blockingQueue.peek());

LinkedBlockingQueue<Integer> linkedBlockingQueue = new LinkedBlockingQueue<>(5);
linkedBlockingQueue.offer(3);
linkedBlockingQueue.offer(2);
linkedBlockingQueue.offer(1);
System.out.println(linkedBlockingQueue.peek());
```

* ArrayBlockingQueue涉及`lock = new ReentrantLock(fair);`

```java
public E peek() {
    final ReentrantLock lock = this.lock;
    lock.lock();
    try {
        return itemAt(takeIndex); // null when queue is empty
    } finally {
        lock.unlock();
    }
}
```

* LinkedBlockingQueue`offer`时涉及

  ```java
    if (e == null) throw new NullPointerException();
    final AtomicInteger count = this.count;
    if (count.get() == capacity)
        return false;
    final int c;
    final Node<E> node = new Node<E>(e);
    final ReentrantLock putLock = this.putLock;
    putLock.lock();
    try {
        if (count.get() == capacity)
            return false;
        enqueue(node);
        c = count.getAndIncrement();
        if (c + 1 < capacity)
            notFull.signal();
    } finally {
        putLock.unlock();
    }
    if (c == 0)
        signalNotEmpty();
    return true;
  
  // putLock
  // private final ReentrantLock putLock = new ReentrantLock();
  ```

* LinkedBlockingQueue`take`时涉及

  ```java
    final E x;
    final int c;
    final AtomicInteger count = this.count;
    final ReentrantLock takeLock = this.takeLock;
    takeLock.lockInterruptibly();
    try {
        while (count.get() == 0) {
            notEmpty.await();
        }
        x = dequeue();
        c = count.getAndDecrement();
        if (c > 1)
            notEmpty.signal();
    } finally {
        takeLock.unlock();
    }
    if (c == capacity)
        signalNotFull();
    return x;
  
  // takeLock
  // private final ReentrantLock takeLock = new ReentrantLock();
  ```

* LinkedBlockingQueue`remove`时涉及 `fullyLock()`、`fullyUnlock()`

  ```java
  void fullyLock() {
      putLock.lock();
      takeLock.lock();
  }
  
  void fullyUnlock() {
      takeLock.unlock();
      putLock.unlock();
  }
  ```

#### 5. BlockingDeque

* LinkedBlockingDeque 

  双端队列，支持先进先出、先进后出

