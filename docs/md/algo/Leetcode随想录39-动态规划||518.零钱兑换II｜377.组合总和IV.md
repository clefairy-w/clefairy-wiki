-  [518. 零钱兑换 II](https://leetcode.cn/problems/coin-change-ii/)

-  [377. 组合总和 Ⅳ](https://leetcode.cn/problems/combination-sum-iv/)

----

#### 518.零钱兑换II

>给你一个整数数组 `coins` 表示不同面额的硬币，另给一个整数 `amount` 表示总金额。
>
>请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 `0` 。
>
>假设每一种面额的硬币有无限个。 
>
>题目数据保证结果符合 32 位带符号整数。
>
> **示例 1：**
>
>```
>输入：amount = 5, coins = [1, 2, 5]
>输出：4
>解释：有四种方式可以凑成总金额：
>5=5
>5=2+2+1
>5=2+1+1+1
>5=1+1+1+1+1
>```
>
>**提示：**
>
>- `1 <= coins.length <= 300`
>- `1 <= coins[i] <= 5000`
>- `coins` 中的所有值 **互不相同**
>- `0 <= amount <= 5000`

```java
class Solution {
    public int change(int amount, int[] coins) {
        int[] dp = new int[amount + 1];
        dp[0] = 1;
        for (int coin : coins) {
            for (int j = coin; j <= amount; j++) {
                dp[j] += dp[j - coin];
            }
        }

        return dp[amount];
    }
}
```



#### 377.组合总和IV

>给你一个由 **不同** 整数组成的数组 `nums` ，和一个目标整数 `target` 。请你从 `nums` 中找出并返回总和为 `target` 的元素组合的个数。
>
>题目数据保证答案符合 32 位整数范围。
>
> **示例 1：**
>
>```
>输入：nums = [1,2,3], target = 4
>输出：7
>解释：
>所有可能的组合为：
>(1, 1, 1, 1)
>(1, 1, 2)
>(1, 2, 1)
>(1, 3)
>(2, 1, 1)
>(2, 2)
>(3, 1)
>请注意，顺序不同的序列被视作不同的组合。
>```
>
>**提示：**
>
>- `1 <= nums.length <= 200`
>- `1 <= nums[i] <= 1000`
>- `nums` 中的所有元素 **互不相同**
>- `1 <= target <= 1000`

**AC代码**

```java
class Solution {
    public int combinationSum4(int[] nums, int target) {
        int[] dp = new int[target + 1];
        dp[0] = 1;
        for (int i = 0; i <= target; i++) {
            for (int num : nums) {
                if (i >= num) {
                    dp[i] += dp[i - num];
                }
            }
        }

        return dp[target];
    }
}
```

