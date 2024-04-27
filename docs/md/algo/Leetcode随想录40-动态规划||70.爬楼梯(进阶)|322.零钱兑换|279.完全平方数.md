-  70.爬楼梯(进阶)
-  [322. 零钱兑换](https://leetcode.cn/problems/coin-change/)
-  279.完全平方数

----

#### 70.爬楼梯(进阶)

>假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
>
>每次你可以爬至多m (1 <= m < n)个台阶。你有多少种不同的方法可以爬到楼顶呢？
>
>注意：给定 n 是一个正整数。
>
>输入描述：输入共一行，包含两个正整数，分别表示n, m
>
>输出描述：输出一个整数，表示爬到楼顶的方法数。
>
>输入示例：3 2
>
>输出示例：3
>
>提示：
>
>当 m = 2，n = 3 时，n = 3 这表示一共有三个台阶，m = 2 代表你每次可以爬一个台阶或者两个台阶。
>
>此时你有三种方法可以爬到楼顶。
>
>- 1 阶 + 1 阶 + 1 阶段
>- 1 阶 + 2 阶
>- 2 阶 + 1 阶
>
>----
>
>**思路：**
>
>1.dp[j],j阶有dp[j]仲方法可以爬到楼顶

**AC代码**

```java
class Solution {
	    public int climbStairs(int n, int m) {
        int[] dp = new int[n + 1];
        dp[0] = 1;

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= m; j++) {
                if (i - j >= 0) {
                    dp[i] += dp[i - j];
                }
            }
        }

        return dp[n];
    }
}
```



#### 322.零钱兑换

>给你一个整数数组 `coins` ，表示不同面额的硬币；以及一个整数 `amount` ，表示总金额。
>
>计算并返回可以凑成总金额所需的 **最少的硬币个数** 。如果没有任何一种硬币组合能组成总金额，返回 `-1` 。
>
>你可以认为每种硬币的数量是无限的。
>
>**示例 1：**
>
>```
>输入：coins = [1, 2, 5], amount = 11
>输出：3 
>解释：11 = 5 + 5 + 1
>```

**AC代码**

```java
class Solution {
	    public int coinChange(int[] coins, int amount) {
        int max = Integer.MAX_VALUE;
        int[] dp = new int[amount + 1];

        Arrays.fill(dp, max);
        dp[0] = 0;

        for (int coin : coins) {
            for (int i = coin; i <= amount; i++) {
                if (dp[i - coin] != max) {
                    dp[i] = Math.min(dp[i], dp[i - coin] + 1);
                }
            }
        }

        return dp[amount] == max ? -1 : dp[amount];
    }
}
```

#### 279.完全平方数

>给你一个整数 `n` ，返回 *和为 `n` 的完全平方数的最少数量* 。
>
>**完全平方数** 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，`1`、`4`、`9` 和 `16` 都是完全平方数，而 `3` 和 `11` 不是。
>
>**示例 1：**
>
>```
>输入：n = 12
>输出：3 
>解释：12 = 4 + 4 + 4
>```

**AC代码**

```java
class Solution {
    public int numSquares(int n) {
     		int max = Integer.MAX_VALUE;
        int[] dp = new int[n + 1];

        Arrays.fill(dp, max);
        dp[0] = 0;
      
        for (int j = 1; j <= n; j++) {
            for (int i = 1; i * i <= j; i++) {
                dp[j] = Math.min(dp[j - i * i] + 1, dp[j]);
            }
        }

        return dp[n];
    }
}
```

