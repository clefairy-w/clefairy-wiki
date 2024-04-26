- [x] [1143. 最长公共子序列](https://leetcode.cn/problems/longest-common-subsequence/)
- [x] [1035. 不相交的线](https://leetcode.cn/problems/uncrossed-lines/)
- [x] [53. 最大子数组和](https://leetcode.cn/problems/maximum-subarray/)

----

#### 1143.最长公共子序列

>给定两个字符串 `text1` 和 `text2`，返回这两个字符串的最长 **公共子序列** 的长度。如果不存在 **公共子序列** ，返回 `0` 。
>
>一个字符串的 **子序列** 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
>
>- 例如，`"ace"` 是 `"abcde"` 的子序列，但 `"aec"` 不是 `"abcde"` 的子序列。
>
>两个字符串的 **公共子序列** 是这两个字符串所共同拥有的子序列。
>
>**示例 1：**
>
>```
>输入：text1 = "abcde", text2 = "ace" 
>输出：3  
>解释：最长公共子序列是 "ace" ，它的长度为 3 。
>```

**AC代码**

```java
class Solution {
    public int longestCommonSubsequence(String text1, String text2) {
        if (text1 == null || text2 == null) {
            return 0;
        }
        int m = text1.length();
        int n = text2.length();

        int[][] dp = new int[m + 1][n + 1];

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        return dp[m][n];
    }
}
```



#### 1035.不相交的线

>在两条独立的水平线上按给定的顺序写下 `nums1` 和 `nums2` 中的整数。
>
>现在，可以绘制一些连接两个数字 `nums1[i]` 和 `nums2[j]` 的直线，这些直线需要同时满足满足：
>
>-  `nums1[i] == nums2[j]`
>- 且绘制的直线不与任何其他连线（非水平线）相交。
>
>请注意，连线即使在端点也不能相交：每个数字只能属于一条连线。
>
>以这种方法绘制线条，并返回可以绘制的最大连线数。
>
>```
>示例：
>输入：nums1 = [2,5,1,2,5], nums2 = [10,5,2,1,5,2]
>输出：3
>
>输入：nums1 = [1,3,7,1,7,5], nums2 = [1,9,2,5,1]
>输出：2
>```

**AC代码**

```java
class Solution {
    public int maxUncrossedLines(int[] nums1, int[] nums2) {
        int m = nums1.length;
        int n = nums2.length;

        if (m == 0 || n == 0) {
            return 0;
        }

        int[][] dp = new int[m + 1][n + 1];
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (nums1[i - 1] == nums2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        return dp[m][n];
    }
}
```



#### 53.最大子数组和

>给你一个整数数组 `nums` ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
>
>**子数组** 是数组中的一个连续部分。
>
>**示例 1：**
>
>```
>输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
>输出：6
>解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
>```

**AC代码**

```java
class Solution {
    public int maxSubArray(int[] nums) {
        int n = nums.length;
        if (n == 0) {
            return 0;
        }

        int[] dp = new int[n];
        dp[0] = nums[0];
        int ans = dp[0];

        for (int i = 1; i < n; i++) {
            dp[i] = nums[i];
            dp[i] = Math.max(dp[i], dp[i - 1] + nums[i]);
            ans = Math.max(ans, dp[i]);
        }

        return ans;
    }
}
```

