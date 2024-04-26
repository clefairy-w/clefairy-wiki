- [x] [122. 买卖股票的最佳时机 II](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/)
- [x] [55. 跳跃游戏](https://leetcode.cn/problems/jump-game/)
- [x] [45. 跳跃游戏 II](https://leetcode.cn/problems/jump-game-ii/)

----

#### 122. 买卖股票的最佳时机 II

>给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
>
>在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。
>
>返回 你能获得的 最大 利润 。
>
> 
>
>示例 1：
>
>输入：prices = [7,1,5,3,6,4]
>输出：7
>解释：在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4 。
>     随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6 - 3 = 3 。
>     总利润为 4 + 3 = 7 。
>示例 2：
>
>输入：prices = [1,2,3,4,5]
>输出：4
>解释：在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4 。
>     总利润为 4 。
>示例 3：
>
>输入：prices = [7,6,4,3,1]
>输出：0
>解释：在这种情况下, 交易无法获得正利润，所以不参与交易可以获得最大利润，最大利润为 0 。
>
>
>提示：
>
>1 <= prices.length <= 3 * 104
>0 <= prices[i] <= 104

```java
class Solution {
    public int maxProfit(int[] prices) {
        int len = prices.length;
        if (len < 2) {
            return 0;
        }
        int maxProfit = 0;
        for (int i = 1; i < len; i++) {
            int diff = prices[i] - prices[i - 1];
            if (diff > 0) {
                maxProfit += diff;
            }
        }

        return maxProfit;
    }
}
```



#### 55. 跳跃游戏

>给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
>
>数组中的每个元素代表你在该位置可以跳跃的最大长度。
>
>判断你是否能够到达最后一个下标。
>
> 
>
>示例 1：
>
>输入：nums = [2,3,1,1,4]
>输出：true
>解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
>示例 2：
>
>输入：nums = [3,2,1,0,4]
>输出：false
>解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
>
>
>提示：
>
>1 <= nums.length <= 3 * 104
>0 <= nums[i] <= 105

**AC代码**

```java
class Solution {
		public boolean canJump(int[] nums) {
        int n = nums.length;
        if (n == 1) {
            return true;
        }

        int coverRange = 0;
        for (int i = 0; i <= coverRange; i++) {
            coverRange = Math.max(coverRange, i + nums[i]);
            if (coverRange >= n - 1) {
                return true;
            }
        }
        return false;
    }
}
```



#### 45.跳跃游戏II

>给定一个长度为 `n` 的 **0 索引**整数数组 `nums`。初始位置为 `nums[0]`。
>
>每个元素 `nums[i]` 表示从索引 `i` 向前跳转的最大长度。换句话说，如果你在 `nums[i]` 处，你可以跳转到任意 `nums[i + j]` 处:
>
>- `0 <= j <= nums[i]` 
>- `i + j < n`
>
>返回到达 `nums[n - 1]` 的最小跳跃次数。生成的测试用例可以到达 `nums[n - 1]`。
>
>**示例 1:**
>
>```
>输入: nums = [2,3,1,1,4]
>输出: 2
>解释: 跳到最后一个位置的最小跳跃数是 2。
>     从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
>```
>
>**示例 2:**
>
>```
>输入: nums = [2,3,0,1,4]
>输出: 2
>```
>
>**提示:**
>
>- `1 <= nums.length <= 104`
>- `0 <= nums[i] <= 1000`
>- 题目保证可以到达 `nums[n-1]`

**AC代码**

```java
class Solution {
    public int jump(int[] nums) {
        int n = nums.length;
        if (n == 0 || n == 1) {
            return 0;
        }

        int curDistance = 0;
        int step = 0;
        int nextDistance = 0;

        for (int i = 0; i < n; i++) {
            nextDistance = Math.max(i + nums[i], nextDistance);
            if (nextDistance >= n - 1) {
                step++;
                break;
            }

            if (i == curDistance) {
                curDistance = nextDistance;
                step++;
            }
        }

        return step;
    }
}
```

