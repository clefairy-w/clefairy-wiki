#### [34. 在排序数组中查找元素的第一个和最后一个位置](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/)

>给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
>
>如果数组中不存在目标值 target，返回 [-1, -1]。
>
>你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
>
> 
>
>示例 1：
>
>输入：nums = [5,7,7,8,8,10], target = 8
>输出：[3,4]
>示例 2：
>
>输入：nums = [5,7,7,8,8,10], target = 6
>输出：[-1,-1]
>示例 3：
>
>输入：nums = [], target = 0
>输出：[-1,-1]
>
>
>提示：
>
>0 <= nums.length <= 105
>-109 <= nums[i] <= 109
>nums 是一个非递减数组
>-109 <= target <= 109

```java
class Solution {
    public int[] searchRange(int[] nums, int target) {
        int index = searchIndex(nums, 0, nums.length - 1, target);
        if (index == -1) {
            return new int[]{-1, -1};
        }
        return searchRange(index, nums);
    }

    public int searchIndex(int[] nums, int left, int right, int target) {
        int index = (left + right) / 2;
        if (left > right) {
            return -1;
        }

        if (nums[index] < target) {
            return searchIndex(nums, index + 1, right, target);
        } else if (nums[index] > target) {
            return searchIndex(nums, left, index - 1, target);
        } else {
            return index;
        }
    }

    public int[] searchRange(int index, int[] nums) {
        int[] res = new int[]{0, nums.length - 1};
        for (int left = index; left >= 0; ) {

            if (nums[index] == nums[left]) {
                left--;
            } else {
                res[0] = left + 1;
                break;
            }
        }
        for (int right = index; right < nums.length; ) {

            if (nums[index] == nums[right]) {
                right++;
            } else {
                res[1] = right - 1;
                break;
            }
        }

        return res;
    }
}
```



#### [69. x 的平方根 ](https://leetcode.cn/problems/sqrtx/)

>给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
>
>由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
>
>注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。
>
> 
>
>示例 1：
>
>输入：x = 4
>输出：2
>示例 2：
>
>输入：x = 8
>输出：2
>解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。
>
>
>提示：
>
>0 <= x <= 231 - 1
>



#### [69. x 的平方根](https://leetcode.cn/problems/sqrtx/)

>给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
>
>由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
>
>注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。
>
> 
>
>示例 1：
>
>输入：x = 4
>输出：2
>示例 2：
>
>输入：x = 8
>输出：2
>解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。
>
>
>提示：
>
>0 <= x <= 231 - 1
>

```java
class Solution {
    public int mySqrt(int x) {
        if (x >= 4) {
            return calculateSqrt(x, 0, x);
        } else {
            return x == 0 ? 0 : 1;
        }
    }

    public int calculateSqrt(int target, int left, int right) {
        if (right - left == 1) {
            return left;
        }
        int mid = (left + right) / 2;
        long num = (long) mid * mid;
        if (num > target) {
            return calculateSqrt(target, left, mid);
        } else if (num < target) {
            return calculateSqrt(target, mid, right);
        } else {
            return mid;
        }
    }
}
```

