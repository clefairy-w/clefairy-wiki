#### 1. List、Set、Queue

- List：存储的元素是有序的，可重复的。

- Set：存储的元素是无序的，不可重复的。

- Queue：按特定的排队规则来确定先后顺序，存储的元素是有序的，可重复的。

  List、Set、Queue都是接口，继承了Collection接口

#### 2. List

| Methods                                                      | Description                                                  |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [add()](https://www.programiz.com/java-programming/library/arraylist/add) | adds an element to a list                                    |
| [addAll()](https://www.programiz.com/java-programming/library/arraylist/addall) | adds all elements of one list to another                     |
| [get()](https://www.programiz.com/java-programming/library/arraylist/get) | helps to randomly access elements from lists                 |
| [iterator()](https://www.programiz.com/java-programming/library/arraylist/iterator) | returns [iterator](https://www.programiz.com/java-programming/iterator) object that can be used to sequentially access elements of lists |
| [set()](https://www.programiz.com/java-programming/library/arraylist/set) | changes elements of lists                                    |
| [remove()](https://www.programiz.com/java-programming/library/arraylist/remove) | removes an element from the list                             |
| [removeAll()](https://www.programiz.com/java-programming/library/arraylist/removeall) | removes all the elements from the list                       |
| [clear()](https://www.programiz.com/java-programming/library/arraylist/clear) | removes all the elements from the list (more efficient than `removeAll()`) |
| [size()](https://www.programiz.com/java-programming/library/arraylist/size) | returns the length of lists                                  |
| [toArray()](https://www.programiz.com/java-programming/library/arraylist/toarray) | converts a list into an array                                |
| [contains()](https://www.programiz.com/java-programming/library/arraylist/contains) | returns `true` if a list contains specific element           |

* ArrayList、LinkedList

```java
// ArrayList implementation of List
List<String> list1 = new ArrayList<>();

// LinkedList implementation of List
List<String> list2 = new LinkedList<>();
```

##### 2.1. ArrayList

```java
ArrayList<Type> arrayList= new ArrayList<>();
```

* 添加元素

  ```java
  // create ArrayList
  ArrayList<String> languages = new ArrayList<>();
  
  // add() method without the index parameter
  languages.add("Java");
  
  // add JavaScript at index 1
  languages.add(1, "JavaScript");
  ```

* 获取元素

  ```java
  // get the element from the arraylist
  languages.get(1);
  ```

* 更新元素

  ```java
  // change the element of the array list
  languages.set(0, "JavaScript");
  ```

* 移除元素

  ```java
  // remove element from index 2
  String str = languages.remove(1);
  ```

* 转换

  ```java
    // create an ArrayList from an array
    ArrayList<String> languages = new ArrayList<>(Arrays.asList(arr));
  
    // convert ArrayList into an array
    languages.toArray(arr);
  ```



ArrayDeque VS Stack

##### 2.2. LinkedList

 Node的组成包括 data、prev、next

```java
// 创建LinkedList
LinkedList<Type> linkedList = new LinkedList<>();
```

* 添加元素

  ```java
    // create linkedlist
    LinkedList<String> animals = new LinkedList<>();
  
    // add() method without the index parameter
    animals.add("Dog");
    animals.add("Cat");
    
    // add() method with the index parameter
    animals.add(1, "Horse");
  ```

* 获取元素

  ```java
  	// get the element from the linked list ， LinkedList遍历
  	String str = animals.get(1);
  ```

* 更新元素

  ```
  	// change elements at index 3
    animals.set(3, "Cow");
  ```

* 移除元素

  ```java
  	// remove elements from index 1
  	String str = animals.remove(1);
  ```

##### 2.3.`ArrayList和LinkedList的区别`

- `是否保证线程安全`：两种List都不是同步的，不保证线程安全；
- `底层数据结构`：ArrayList底层用的是Object数组；LinkedList底层使用的是双向链表数据结构；
- `插入和删除是否受元素位置的影响`： ArrayList采用数组存储，所以插入和删除的时间复杂度受元素影响。头插法、尾插法、中间插入元素的方法，时间复杂度是不一样的。LinkedList采用链表存储，尾插法和中间插入元素时间复杂度不一样，因为涉及到是否需要移到指定位置再插入。
- `是否支持快速随机访问`：LinkedList不支持高校的随机访问，而ArrayList支持。快速随机访问就是通过元素的序号快速获取元素对象(`get(int index)`);
- `内存空间占用`：ArrayList的空间浪费主要体现再List列表的结尾会预留一定的容量空间，而LinkedList的空间花费则体现在它的每一个元素都需要消耗比ArrayList更多的空间(因为要存放直接后继和直接前驱以及当前元素本身)

