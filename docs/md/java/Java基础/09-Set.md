`Set`是个接口，继承了`Collection`接口，实现类有`HashSet`、`LinkedHashSet`、`EnumSet`、`TreeSet`。不重复元素的集合，主要用于去重。

#### 1. HashSet

  底层是基于HashMap实现的。

```java
public HashSet() {
    map = new HashMap<>();
}
```

##### 1.1. 添加元素

```java
private static final Object PRESENT = new Object();

public boolean add(E e) {
    return map.put(e, PRESENT)==null;
}
```

#### 2. LinkedHashSet

   底层是基于Linked HashMap实现的。

#### 3. EnumSet

```java
// Creating an EnumSet using allOf()
EnumSet<Size> sizes = EnumSet.allOf(Size.class);
```

#### 4. TreeSet

  底层是基于TreeMap实现的。

