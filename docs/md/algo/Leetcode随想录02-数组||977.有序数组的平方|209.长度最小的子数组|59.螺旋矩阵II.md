-  [977. 有序数组的平方](https://leetcode.cn/problems/squares-of-a-sorted-array/)
-  [209. 长度最小的子数组](https://leetcode.cn/problems/minimum-size-subarray-sum/)
-  [59. 螺旋矩阵 II](https://leetcode.cn/problems/spiral-matrix-ii/)

-----

#### 977. 有序数组的平方

>给你一个按 **非递减顺序** 排序的整数数组 `nums`，返回 **每个数字的平方** 组成的新数组，要求也按 **非递减顺序** 排序。
>
>**示例 1：**
>
>```
>输入：nums = [-4,-1,0,3,10]
>输出：[0,1,9,16,100]
>解释：平方后，数组变为 [16,1,0,9,100]
>排序后，数组变为 [0,1,9,16,100]
>```
>
>**示例 2：**
>
>```
>输入：nums = [-7,-3,2,3,11]
>输出：[4,9,9,49,121]
>```
>
>**提示：**
>
>- `1 <= nums.length <= 104`
>- `-104 <= nums[i] <= 104`
>- `nums` 已按 **非递减顺序** 排序
>
>**进阶：**
>
>- 请你设计时间复杂度为 `O(n)` 的算法解决本问题

###### 977.1. 信息提取

>* 非递减顺序排序

###### 977.2. 解题思路

>* 绝对值大的则排在最后面，应从后往前来

###### 977.3. AC代码-Java版本

```java

// 时间复杂度O(n)
// 空间复杂度O(1)
// 双指针
class Solution {
    public int[] sortedSquares(int[] nums) {
        int[] result = new int[nums.length];
        int left = 0, right = nums.length - 1, index = nums.length -1;
        while(left <= right){
            int diff = nums[left] * nums[left] - nums[right] * nums[right];
            if( diff < 0 ){
                result[index--] = nums[right] * nums[right];
                right--;
            }else{
                result[index--] = nums[left] * nums[left];
                left++;
            }
        }
        return result;
    }
}
```

```java
// 时间复杂度O(n)
// 空间复杂度O(1)
// 双指针
class Solution {
    public int[] sortedSquares(int[] nums) {
        int n = nums.length;
        int[] ans = new int[n];
        int left = 0, right = n - 1;
        for (int i = n - 1; i >= 0; i--) {
            if (nums[left] < 0 && nums[left] + nums[right] < 0) {
                ans[i] = nums[left] * nums[left];
                left++;
            } else {
                ans[i] = nums[right] * nums[right];
                right--;
            }
        }

        return ans;
    }
}
```

```java
// 时间复杂度：O(nlog⁡n)，其中 nnn 是数组 nums\textit{nums}nums 的长度。
// 空间复杂度：O(log⁡n)。除了存储答案的数组以外，我们需要 O(log⁡n)的栈空间进行排序。
// 直接排序
class Solution {
    public int[] sortedSquares(int[] nums) {
        int[] ans = new int[nums.length];
        for (int i = 0; i < nums.length; i++) {
            ans[i] = nums[i] * nums[i];
        }

        Arrays.sort(ans);
        return ans;
    }
}
```



#### 209.长度最小的子数组

>给定一个含有 `n` 个正整数的数组和一个正整数 `target` **。**
>
>找出该数组中满足其总和大于等于 `target` 的长度最小的 **连续子数组** `[numsl, numsl+1, ..., numsr-1, numsr]` ，并返回其长度**。**如果不存在符合条件的子数组，返回 `0` 。
>
>**示例 1：**
>
>```
>输入：target = 7, nums = [2,3,1,2,4,3]
>输出：2
>解释：子数组 [4,3] 是该条件下的长度最小的子数组。
>```
>
>**示例 2：**
>
>```
>输入：target = 4, nums = [1,4,4]
>输出：1
>```
>
>**示例 3：**
>
>```
>输入：target = 11, nums = [1,1,1,1,1,1,1,1]
>输出：0
>```
>
>**提示：**
>
>- `1 <= target <= 109`
>- `1 <= nums.length <= 105`
>- `1 <= nums[i] <= 105`
>
>**进阶：**
>
>- 如果你已经实现 `O(n)` 时间复杂度的解法, 请尝试设计一个 `O(n log(n))` 时间复杂度的解法。

###### 209.1.信息提取

>* 连续子数组

###### 209.2.解题思路

>* 定义两个指针 i 和 j 分别表示子数组（滑动窗口窗口）的开始位置和结束位置，维护变量 sum 存储子数组中的元素和（即从 nums[i] 到 nums[j]的元素和）。
>
>  初始状态下，i 和 j 都指向下标 0，sum 的值为 0。
>
>  每一轮迭代，将 nums[j] 加到 sum，如果 sum≥target ，则更新子数组的最小长度（此时子数组的长度是 j−i+1，然后将 nums[i] 从 sum 中减去并将 i 右移，直到 sum<target，在此过程中同样更新子数组的最小长度。在每一轮迭代的最后，将 j 右移。
>

###### 209.3.AC代码-Java版本

```java
// 滑动窗口
// 时间复杂度：O(n)，其中 n 是数组的长度。指针 i， j 最多各移动 n 次。
// 空间复杂度：O(1)
class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int i = 0;
        int sum = 0;
        int res = Integer.MAX_VALUE;
        int j = 0;
        while (j < nums.length) {
            sum += nums[j];
            while (sum >= target) {
                res = Math.min(res, j - i + 1);
                sum -= nums[i++];
            }
            j++;
        }
        return res == Integer.MAX_VALUE ? 0 : res;
    }
}
```



#### 59.螺旋矩阵 II

>给你一个正整数 `n` ，生成一个包含 `1` 到 `n2` 所有元素，且元素按顺时针顺序螺旋排列的 `n x n` 正方形矩阵 `matrix` 。
>
> 
>
>**示例 1：**
>
>![img](https://assets.leetcode.com/uploads/2020/11/13/spiraln.jpg)
>
>```
>输入：n = 3
>输出：[[1,2,3],[8,9,4],[7,6,5]]
>```
>
>**示例 2：**
>
>```
>输入：n = 1
>输出：[[1]]
>```
>
> 
>
>**提示：**
>
>- `1 <= n <= 20`

###### 59.1.信息提取

>* 按顺时针顺序螺旋排列
>* n * n

###### 59.2.解题思路

>* 初始化一个n*n大小的矩阵matrix，然后模拟整个向内环绕填入的过程：
>
>* 定义当前左右上下边界left，right，top，board，初始值num=1，迭代终止值target=n*n；
>
>* 当num<=target时，始终按照从左到右，从上到下，从右向左，从下到上填入顺序循环，每次填入后
>
>  ​	a. 执行num+1，得到下一个需要填入的数字；
>
>  ​	b. 更新边界：从左向右填完上边界向内缩1，top++；从上到下填完右边界向内缩1，right--；从右向左填完下边界向内缩1，board--；	   从下到上填完左边界向内缩1，left++； 
>
>* 使用num<=target而不使用边界作为迭代条件，是为了解决n为奇数时，矩阵中心数字无法在迭代过程中被填充的问题

###### 59.3.AC代码-Java版本

```java
class Solution {
    public int[][] generateMatrix(int n) {
        int[][] matrix = new int[n][n];
        int top = 0, board = n - 1, left = 0, right = n - 1;

        int num = 1, target = n * n;
        while (num <= target) {
            for (int i = left; i <= right; i++) {
                matrix[top][i] = num++;
            }
            top++;
            for (int i = top; i <= board; i++) {
                matrix[i][right] = num++;
            }
            right--;
            for (int i = right; i >= left; i--) {
                matrix[board][i] = num++;
            }
            board--;
            for (int i = board; i >= top; i--) {
                matrix[i][left] = num++;
            }
            left++;
        }

        return matrix;
    }
}
```

