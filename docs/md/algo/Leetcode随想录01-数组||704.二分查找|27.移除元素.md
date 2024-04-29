-  [704. 二分查找](https://leetcode.cn/problems/binary-search/)
-  [27. 移除元素](https://leetcode.cn/problems/remove-element/)

------

#### **704.二分查找**

> 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
>
> **提示：**
>
> 1. 你可以假设 `nums` 中的所有元素是不重复的。
> 2. `n` 将在 `[1, 10000]`之间。
> 3. `nums` 的每个元素都将在 `[-9999, 9999]`之间。

###### 704.1 题目信息提取

​	(1). 有序数组
​	(2). 元素不重复

###### 704.2 解题思路

​	⭐️ 本题中主要是比较num[i]与target之间的大小，找到相等的即可。那如何快速的找到目标数值呢？由于题目中的数组为有序且无重复，可以考虑使用二分法。二分法最重要的是定义区间，写二分法，区间的定义一般为两种，左闭右闭即[left, right]，或者左闭右开即[left, right)。

​	首先是判断目标值与升序数组的首尾之间的大小比较，主要目的是判断目标值是不是在数组的最小值与最大值的数值区间范围内。

​	其次根据二分法，定义查找的范围是[left,right],初始查找的范围是整个数组。每次查找范围的中点mid，然后比较nums[mid]和target之间的大小。如果相等，则直接返回mid; 如果不相等则将查找的范围缩小一半。若nums[mid]值大，则表示target在nums[mid]的左边，right=mid-1;若target值大，则表示target在nums[mid]的右边，left=mid+1;

​	最后如果没有找到，则返回-1；

​	由于每次查找都将范围缩小了一半，则时间复杂度为O(log*n*)

###### 704.3 Java版本

```java
class Solution {
    public int search(int[] nums, int target) {
        if (nums[0] > target || nums[nums.length - 1] < target) {
            return -1;
        }

        int left = 0, right = nums.length - 1;

      	// 二分查找: 左闭右闭
        while (left <= right) {
            int mid = (left + right) / 2;
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            }
        }

        return -1;

    }
}

/**
时间复杂度: O(logn)
时间复杂度: O(1)
**/
```



#### **27.移除元素**

> 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
>
> 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
>
> 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

###### 27.1 题目信息提取

> ​	(1). 不能使用额外空间
>
> ​	(2). 元素顺序可以改变
>
> ​	(3). 无需考虑数组中超出新长度的部分

###### 27.2 解题思路

> 根据题目提取出的三个信息，可以将新数组写在旧数组上。设置两个指针，即双指针法。left指针是一个慢指针，是新数组元素的下标；right是快指针，是在原数组中寻找新数组元素的指针，此时两个指针同方向。两个指针均是从下标0的位置开始，一起向右移动；由于慢指针left表示的是新数组元素的下标，当nums[right] != val 时，则将nums[right]赋值给nums[left]，并且慢指针left向右移动一位。如果nums[right] == val 时，则不能将nums[right]赋值给nums[left]。无论nums[right]是否与val值相等，right都要继续向右移动寻找目标数组的元素。	

###### 27.3 Java版本

```java
class Solution {
    public int removeElement(int[] nums, int val) {
      	// 双指针-同向
        int left = 0;
        for(int right = 0; right < nums.length; right++){
            if(nums[right] != val){
                nums[left] = nums[right];
                left++;
            }
        }
        return left;
    }
}
```



[参考资料]

[1] 力扣中国移除元素题解 https://leetcode.cn/

[2] 代码随想录移出元素题解 https://www.programmercarl.com/







