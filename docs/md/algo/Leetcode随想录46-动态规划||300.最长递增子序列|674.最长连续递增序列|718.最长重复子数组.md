-  [300. 最长递增子序列](https://leetcode.cn/problems/longest-increasing-subsequence/)
-  [674. 最长连续递增序列](https://leetcode.cn/problems/longest-continuous-increasing-subsequence/)
-  [718. 最长重复子数组](https://leetcode.cn/problems/maximum-length-of-repeated-subarray/)

----

#### 300.最长递增子序列

>给你一个整数数组 `nums` ，找到其中最长严格递增子序列的长度。
>
>**子序列** 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，`[3,6,2,7]` 是数组 `[0,3,1,6,2,2,7]` 的子序列。
>
>**示例 1：**
>
>```
>输入：nums = [10,9,2,5,3,7,101,18]
>输出：4
>解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
>```

**AC代码**

```java
class Solution {
    public int lengthOfLIS(int[] nums) {
        int len = nums.length;
        if (len == 0) {
            return 0;
        }

        int[] dp = new int[len];
        Arrays.fill(dp, 1);
        int res = 1;
        for (int i = 1; i < len; i++) {
            for (int j = 0; j < i; j++) {
                if (nums[i] > nums[j]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }

            res = Math.max(res, dp[i]);
        }

        return res;
    }
}
```



#### 674.最长连续递增子序列

>给定一个未经排序的整数数组，找到最长且 **连续递增的子序列**，并返回该序列的长度。
>
>**连续递增的子序列** 可以由两个下标 `l` 和 `r`（`l < r`）确定，如果对于每个 `l <= i < r`，都有 `nums[i] < nums[i + 1]` ，那么子序列 `[nums[l], nums[l + 1], ..., nums[r - 1], nums[r]]` 就是连续递增子序列。
>
>**示例 1：**
>
>```
>输入：nums = [1,3,5,4,7]
>输出：3
>解释：最长连续递增序列是 [1,3,5], 长度为3。
>尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为 5 和 7 在原数组里被 4 隔开。
>```

**AC代码**

```java
class Solution {
    public int findLengthOfLCIS(int[] nums) {
        int len = nums.length;
        if (len == 0) {
            return 0;
        }

        int[] dp = new int[len];
        Arrays.fill(dp, 1);
        int res = 1;

        for (int i = 1; i < len; i++) {
            if (nums[i] > nums[i - 1]) {
                dp[i] = dp[i - 1] + 1;
            }

            res = Math.max(res, dp[i]);
        }

        return res;
    }
}
```



#### 718.最长重复子数组

>给两个整数数组 `nums1` 和 `nums2` ，返回 *两个数组中 **公共的** 、长度最长的子数组的长度* 。
>
>**示例 1:**
>
>```
>输入：nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
>输出：3
>解释：长度最长的公共子数组是 [3,2,1] 。
>```

**AC代码**

```java
class Solution {
    public int findLength(int[] nums1, int[] nums2) {
        int n1 = nums1.length;
        int n2 = nums2.length;

        if (n1 == 0 || n2 == 0) {
            return 0;
        }

        int[][] dp = new int[n1 + 1][n2 + 1];
        int res = 0;

        for (int i = 1; i <= n1; i++) {
            for (int j = 1; j <= n2; j++) {
                if (nums1[i - 1] == nums2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                }
                res = Math.max(res, dp[i][j]);
            }
        }

        return res;
    }
}
```

