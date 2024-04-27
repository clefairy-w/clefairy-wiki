-  [739. 每日温度](https://leetcode.cn/problems/daily-temperatures/)
-  [42. 接雨水](https://leetcode.cn/problems/trapping-rain-water/)
-  [84. 柱状图中最大的矩形](https://leetcode.cn/problems/largest-rectangle-in-histogram/)

----

>- **通常是一维数组，要寻找任一个元素的右边或者左边第一个比自己大或者小的元素的位置，此时就可以用单调栈，以空间换取时间**。
>
>- 时间复杂度为O(n)。
>- 栈在此处的作用是记录已经遍历过的数据，此处栈里的元素是数组中元素的下标。

----

### 739.每日温度

> - 此题关键是找出右边第一个大于当前值的数所在下标，当前值与第一大的数值之差即为天数。
> - 考察点在于单调栈的使用。

##### **AC代码**

```java
class Solution {
      public int[] dailyTemperatures(int[] temperatures) {
        int len = temperatures.length;
        int[] ans = new int[len];
        Deque<Integer> stack = new LinkedList<>();
        for (int i = 0; i < len; i++) {
            int temperature = temperatures[i];
            while (!stack.isEmpty() && temperature > temperatures[stack.peek()]) {
                int preIndex = stack.pop();
                ans[preIndex] = i - preIndex;
            }
            stack.push(i); //（>,<,= 均是需要入栈）
        }

        return ans;
    }
}
```



#### 42.接雨水

> - 此题关键是要找出当前元素左边及右边第一个大的元素，比较左右两边的高度取最小值减去当前元素的高度极为高度，宽度是左右两边元素的下标相减再减一，累加宽高的乘积。
> - 关键是如何确定三个元素的位置。

**AC代码**

```java
class Solution {
  
      public int trap(int[] height) {
        int len = height.length;
        if (len <= 2) {
            return 0;
        }

        Deque<Integer> stack = new LinkedList<>();
        int ans = 0;
        stack.push(0);

        for (int i = 1; i < len; i++) {
            while (!stack.isEmpty() && height[i] > height[stack.peek()]) {
                int mid = stack.pop();
                if (!stack.isEmpty()) {
                    int left = stack.peek();
                    int h = Math.min(height[i], height[left]) - height[mid];
                    int w = i - left - 1;
                    ans += h * w;
                }
            }
            stack.push(i); //（>,<,= 均是需要入栈）
        }

        return ans;
    }
  
}
```



#### 84.柱状图中最大的矩形

> - 此题关键是找到每个柱子左右两边第一个小于该柱子的柱子
> - 涉及到单调栈里的顺序是从小到大还是从大到小，此题是从大到小。



**AC代码**

```java
class Solution {
  
      public int largestRectangleArea(int[] heights) {
        int len = heights.length;
        int[] newHeights = new int[len + 2];
        System.arraycopy(heights, 0, newHeights, 1, len);
        newHeights[0] = 0;
        newHeights[len + 1] = 0;

        heights = newHeights;
        Deque<Integer> stack = new LinkedList<>();

        int ans = 0;

        stack.push(0);

        for (int i = 1; i < heights.length; i++) {
            while (!stack.isEmpty() && heights[i] < heights[stack.peek()]) {
                int mid = stack.pop();
                if (!stack.isEmpty()) {
                    int left = stack.peek();
                    int w = i - left - 1;
                    int h = heights[mid];
                    ans = Math.max(ans, w * h);
                }
            }
            stack.push(i);
        }

        return ans;
    }
  
}
```

