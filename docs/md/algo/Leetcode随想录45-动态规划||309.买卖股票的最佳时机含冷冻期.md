- [x] [309. 买卖股票的最佳时机含冷冻期](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/)
- [x] [714. 买卖股票的最佳时机含手续费](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)

-----

#### 309.买卖股票的最佳时机含冷冻期

>给定一个整数数组`prices`，其中第 `prices[i]` 表示第 `*i*` 天的股票价格 。
>
>设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:
>
>- 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
>
>**注意：**你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
>
>**示例 1:**
>
>输入: prices = [1,2,3,0,2]
>输出: 3 
>解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]

**AC代码**

```java
class Solution {
    public int maxProfit(int[] prices) {

        int len = prices.length;

        if (len == 0) {
            return 0;
        }

        int[][] dp = new int[len][4];
        dp[0][0] = -prices[0];

        for (int i = 1; i < len; i++) {
            dp[i][0] = Math.max(dp[i - 1][0], Math.max(dp[i - 1][3], dp[i - 1][1]) - prices[i]);
            dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][3]);
            dp[i][2] = dp[i - 1][0] + prices[i];
            dp[i][3] = dp[i - 1][2];
        }

        return Math.max(dp[len - 1][3], Math.max(dp[len - 1][2], dp[len - 1][1]));
    }
}
```



#### 714.买卖股票的最佳时机含手续费

>给定一个整数数组 `prices`，其中 `prices[i]`表示第 `i` 天的股票价格 ；整数 `fee` 代表了交易股票的手续费用。
>
>你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。
>
>返回获得利润的最大值。
>
>**注意：**这里的一笔交易指买入持有并卖出股票的整个过程，每笔交易你只需要为支付一次手续费。
>
>**示例：**
>
>输入：prices = [1, 3, 2, 8, 4, 9], fee = 2
>输出：8
>解释：能够达到的最大利润:  
>在此处买入 prices[0] = 1
>在此处卖出 prices[3] = 8
>在此处买入 prices[4] = 4
>在此处卖出 prices[5] = 9
>总利润: ((8 - 1) - 2) + ((9 - 4) - 2) = 8



**AC代码**

```java
class Solution {
    public int maxProfit(int[] prices, int fee) {
        int len = prices.length;
        if (len == 0) {
            return 0;
        }
        int[][] dp = new int[len][2];
        dp[0][0] = -prices[0];

        for (int i = 1; i < len; i++) {
            dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
            dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i] - fee);
        }
        return Math.max(dp[len - 1][0], dp[len - 1][1]);
    }
}
```

