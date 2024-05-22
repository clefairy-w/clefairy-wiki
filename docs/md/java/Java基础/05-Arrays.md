数组是一组相同类型的数据的集合。

#### 1. 声明

```java
dataType[] arrayName;

// declare an array
double[] data;

// allocate memory
data = new double[10];

double[] data = new double[10];
```

dataType可以是int、char等基本数据类型，或者Java对象。

#### 2. 初始化

```java
//declare and initialize and array
int[] age = {1, 2, 3, 4, 5};
```

#### 3. 获取元素

数组下标从0开始，元素个数为n，最后一个元素的下标n-1；

```java
// access array elements
array[index]
```

#### 4. 遍历元素

for循环

for-each循环

#### 5. 复制数组

```java
class Main {
    public static void main(String[] args) {
       
        int [] numbers = {1, 2, 3, 4, 5, 6};
        int [] positiveNumbers = numbers;    // copying arrays， shallow copy

        int [] source = {1, 2, 3, 4, 5, 6};
        int [] destination = new int[6];

        // iterate and copy elements from source to destination
        for (int i = 0; i < source.length; ++i) {
            destination[i] = source[i];
        }
    }
}
```

```java
// Arrays.copyOf方法

public static int[] copyOf(int[] original, int newLength) {
    // 申请一个新的数组
    int[] copy = new int[newLength];
	// 调用System.arraycopy,将源数组中的数据进行拷贝,并返回新的数组
    System.arraycopy(original, 0, copy, 0,
                         Math.min(original.length, newLength));
    return copy;
}
```

二维数组拷贝

```java
class Main {
    public static void main(String[] args) {
      
        int[][] source = {
              {1, 2, 3, 4}, 
              {5, 6},
              {7, 8, 9, 10, 11}
              };

        int[][] destination = new int[source.length][];

        for (int i = 0; i < destination.length; ++i) {

            // allocating space for each row of destination array
            destination[i] = new int[source[i].length];

            for (int j = 0; j < destination[i].length; ++j) {
                destination[i][j] = source[i][j];
            }
        }
     
        for (int i = 0; i < source.length; ++i) {

             // allocating space for each row of destination array
             destination[i] = new int[source[i].length];
             System.arraycopy(source[i], 0, destination[i], 0, destination[i].length);
        }
      
    }
}
```