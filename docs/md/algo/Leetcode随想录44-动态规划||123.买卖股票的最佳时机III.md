- [x] [123. 买卖股票的最佳时机 III](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii/)
- [x] [188. 买卖股票的最佳时机 IV](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iv/)

----

123.买卖股票的最佳时机 III

>给定一个数组，它的第 `i` 个元素是一支给定的股票在第 `i` 天的价格。
>
>设计一个算法来计算你所能获取的最大利润。你最多可以完成 **两笔** 交易。
>
>**注意：**你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
>
>**示例 1:**
>
>```
>输入：prices = [3,3,5,0,0,3,1,4]
>输出：6
>解释：在第 4 天（股票价格 = 0）的时候买入，在第 6 天（股票价格 = 3）的时候卖出，这笔交易所能获得利润 = 3-0 = 3 。
>     随后，在第 7 天（股票价格 = 1）的时候买入，在第 8 天 （股票价格 = 4）的时候卖出，这笔交易所能获得利润 = 4-1 = 3 。
>```

**AC代码**

```java
class Solution {
    public int maxProfit(int[] prices) {
        int len = prices.length;
        if (len == 0) {
            return 0;
        }

        int[][] dp = new int[len][2];
        dp[0][0] = -prices[0];
        dp[0][1] = 0;

        for (int i = 1; i < len; i++) {
            dp[i][0] = Math.max(dp[i - 1][0], -prices[i]);
            dp[i][1] = Math.max(dp[i - 1][0] + prices[i], dp[i - 1][1]);
        }

        return dp[len - 1][1];
    }
}
```

188.买卖股票的最佳时机 IV

>给你一个整数数组 `prices` 和一个整数 `k` ，其中 `prices[i]` 是某支给定的股票在第 `i` 天的价格。
>
>设计一个算法来计算你所能获取的最大利润。你最多可以完成 `k` 笔交易。也就是说，你最多可以买 `k` 次，卖 `k` 次。
>
>**注意：**你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
>
> 
>
>**示例 1：**
>
>```
>输入：k = 2, prices = [2,4,1]
>输出：2
>解释：在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。
>```

**AC代码**

```java
class Solution {
    public int maxProfit(int k, int[] prices) {
        if (k == 0 || prices.length == 0) {
            return 0;
        }
        int[] dp = new int[2 * k];
        for (int i = 0; i < k; i++) {
            dp[i * 2] = -prices[0];
        }

        for (int i = 1; i <= prices.length; i++) {
            dp[0] = Math.max(dp[0], -prices[i - 1]);
            dp[1] = Math.max(dp[1], dp[0] + prices[i - 1]);
            for (int j = 2; j < 2 * k; j += 2) {
                dp[j] = Math.max(dp[j], dp[j - 1] - prices[i - 1]);
                dp[j + 1] = Math.max(dp[j + 1], dp[j] + prices[i - 1]);
            }
        }

        return dp[2 * k - 1];
    }
}
```

