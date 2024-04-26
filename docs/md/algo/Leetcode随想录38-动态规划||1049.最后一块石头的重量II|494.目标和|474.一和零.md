- [x] [1049.最后一块石头的重量 II](https://leetcode.cn/problems/last-stone-weight-ii/)
- [x] [494.目标和](https://leetcode.cn/problems/target-sum/)
- [x] [474.一和零](https://leetcode.cn/problems/ones-and-zeroes/)

----

#### 1049.最后一块石头的重量II

>有一堆石头，用整数数组 `stones` 表示。其中 `stones[i]` 表示第 `i` 块石头的重量。
>
>每一回合，从中选出**任意两块石头**，然后将它们一起粉碎。假设石头的重量分别为 `x` 和 `y`，且 `x <= y`。那么粉碎的可能结果如下：
>
>- 如果 `x == y`，那么两块石头都会被完全粉碎；
>- 如果 `x != y`，那么重量为 `x` 的石头将会完全粉碎，而重量为 `y` 的石头新重量为 `y-x`。
>
>最后，**最多只会剩下一块** 石头。返回此石头 **最小的可能重量** 。如果没有石头剩下，就返回 `0`。
>
>----
>
>**思路：**
>
>1. 01背包问题
>2. 将石头分为两堆近似相等的石头堆



**AC代码**

```java
class Solution {
    public int lastStoneWeightII(int[] stones) {
        int sum = 0;
        for (int stone : stones) {
            sum += stone;
        }
        int target = sum / 2;
        int[] dp = new int[target + 1];
        for (int stone : stones) { // 物品
            for (int j = target; j >= stone; j--) { // 背包容量
                dp[j] = Math.max(dp[j], dp[j - stone] + stone);
            }
        }

        return sum - 2 * dp[target]; //两堆相撞
    }
}
```



#### 494.目标和

>给你一个非负整数数组 `nums` 和一个整数 `target` 。
>
>向数组中的每个整数前添加 `'+'` 或 `'-'` ，然后串联起所有整数，可以构造一个 **表达式** ：
>
>- 例如，`nums = [2, 1]` ，可以在 `2` 之前添加 `'+'` ，在 `1` 之前添加 `'-'` ，然后串联起来得到表达式 `"+2-1"` 。
>
>返回可以通过上述方法构造的、运算结果等于 `target` 的不同 **表达式** 的数目。
>
>----
>
>**思路：**
>
>1. 01背包问题
>2. 将集合分为两个子集和，一个子集全放整数，一个子集全放负数
>3. 正子集-负子集=target；负子集 = sum- 正子集；正子集 = (sum+target)/2;
>4. `dp[j] +=dp[j-num]`,求物品的组织方式



**AC代码**

```java
class Solution {


    public int findTargetSumWays(int[] nums, int target) {
        int sum = 0;

        for (int num : nums) {
            sum += num;
        }

        if (Math.abs(target) > sum) {
            return 0;
        }

        if ((sum + target) % 2 != 0) {
            return 0;
        }

        int bagSize = (sum + target) / 2;
        int[] dp = new int[bagSize + 1];
        dp[0] = 1;

        for (int num : nums) {
            for (int j = bagSize; j >= num; j--) {
                dp[j] += dp[j - num];
            }
        }

        return dp[bagSize];
    }
}
```



#### 474.一和零

>给你一个二进制字符串数组 `strs` 和两个整数 `m` 和 `n` 。
>
>请你找出并返回 `strs` 的最大子集的长度，该子集中 **最多** 有 `m` 个 `0` 和 `n` 个 `1` 。
>
>如果 `x` 的所有元素也是 `y` 的元素，集合 `x` 是集合 `y` 的 **子集** 。
>
>
>
>**示例 1：**
>
>```
>输入：strs = ["10", "0001", "111001", "1", "0"], m = 5, n = 3
>输出：4
>解释：最多有 5 个 0 和 3 个 1 的最大子集是 {"10","0001","1","0"} ，因此答案是 4 。
>其他满足题意但较小的子集包括 {"0001","1"} 和 {"10","1","0"} 。{"111001"} 不满足题意，因为它含 4 个 1 ，大于 n 的值 3 。
>```
>
>-------------------------
>
>**思路：**
>
>1. 01背包问题
>2. 用m,n两个维度来表示,`dp[i][j]`
>3. `dp[i][j]=max(dp[i-x][j-y]+1, dp[i][j])`,x表示字符串中有x个0，y表示字符串中有y个0；



**AC代码**

```java
class Solution {
    public int findMaxForm(String[] strs, int m, int n) {
        int[][] dp = new int[m + 1][n + 1];
        dp[0][0] = 0;
        for (String str : strs) {
            int x = 0, y = 0;
            for (char c : str.toCharArray()) {
                if (c == '0') {
                    x++;
                } else if (c == '1') {
                    y++;
                }
            }
            for (int i = m; i >= x; i--) {
                for (int j = n; j >= y; j--) {
                    dp[i][j] = Math.max(dp[i - x][j - y] + 1, dp[i][j]);
                }
            }
        }

        return dp[m][n];
    }
}
```

