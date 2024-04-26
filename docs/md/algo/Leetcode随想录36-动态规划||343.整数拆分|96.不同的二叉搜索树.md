- [x] [343. 整数拆分](https://leetcode.cn/problems/integer-break/)
- [x] [96. 不同的二叉搜索树](https://leetcode.cn/problems/unique-binary-search-trees/)

----

#### 343.整数拆分

>给定一个正整数 `n` ，将其拆分为 `k` 个 **正整数** 的和（ `k >= 2` ），并使这些整数的乘积最大化。
>
>返回 *你可以获得的最大乘积* 。
>
> 
>
>**示例 1:**
>
>```
>输入: n = 2
>输出: 1
>解释: 2 = 1 + 1, 1 × 1 = 1。
>```
>
>**示例 2:**
>
>```
>输入: n = 10
>输出: 36
>解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
>```
>
> 
>
>**提示:**
>
>- `2 <= n <= 58`

```java
class Solution {
    public int integerBreak(int n) {
        int[] dp = new int[n + 1];
        for (int i = 2; i <= n; i++) {
            int curMax = 0;
            for (int j = 1; j < i; j++) {
                curMax = Math.max(curMax, Math.max(j * (i - j), j * dp[i - j]));
            }
            dp[i] = curMax;
        }

        return dp[n];

    }
}
```



#### 96.不同的二叉搜索树

>* 二叉搜索树的特征
>* 公式的推导
>* 遍历的顺序

**AC代码**

```java
class Solution {
    public int numTrees(int n) {
        int[] dp = new int[n + 1];

        dp[0] = 1;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                dp[i] += dp[j - 1] * dp[i - j];
            }
        }

        return dp[n];
    }
}
```

