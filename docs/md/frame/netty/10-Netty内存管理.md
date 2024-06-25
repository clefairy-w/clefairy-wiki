Java 中堆外内存的分配方式有两种：**ByteBuffer#allocateDirect**和**Unsafe#allocateMemory**。

Java NIO 包中的 ByteBuffer 类的分配方式，使用方式如下：

```java
// 分配 10M 堆外内存

ByteBuffer buffer = ByteBuffer.allocateDirect(10 * 1024 * 1024); 
```

跟进 ByteBuffer.allocateDirect 源码，发现其中直接调用的 DirectByteBuffer 构造函数：

```csharp
DirectByteBuffer(int cap) {

    super(-1, 0, cap, cap);

    boolean pa = VM.isDirectMemoryPageAligned();

    int ps = Bits.pageSize();

    long size = Math.max(1L, (long)cap + (pa ? ps : 0));

    Bits.reserveMemory(size, cap);

    long base = 0;

    try {

        base = unsafe.allocateMemory(size);

    } catch (OutOfMemoryError x) {

        Bits.unreserveMemory(size, cap);

        throw x;

    }

    unsafe.setMemory(base, size, (byte) 0);

    if (pa && (base % ps != 0)) {

        address = base + ps - (base & (ps - 1));

    } else {

        address = base;

    }

    cleaner = Cleaner.create(this, new Deallocator(base, size, cap));

    att = null;

}
```

在堆内存放的 DirectByteBuffer 对象并不大，仅仅包含堆外内存的地址、大小等属性，同时还会创建对应的 Cleaner 对象，通过 ByteBuffer 分配的堆外内存不需要手动回收，它可以被 JVM 自动回收。当堆内的 DirectByteBuffer 对象被 GC 回收时，Cleaner 就会用于回收对应的堆外内存。

Unsafe#allocateMemory 所分配的内存必须自己手动释放，否则会造成内存泄漏，这也是 Unsafe 不安全的体现。Unsafe 同样提供了内存释放的操作：

```csharp
unsafe.freeMemory(address);
```

