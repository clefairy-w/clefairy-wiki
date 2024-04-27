-  [416. 分割等和子集](https://leetcode.cn/problems/partition-equal-subset-sum/)

----

#### 416.分割等和子集

>给你一个 **只包含正整数** 的 **非空** 数组 `nums` 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
>
>**示例 1：**
>
>```
>输入：nums = [1,5,11,5]
>输出：true
>解释：数组可以分割成 [1, 5, 5] 和 [11] 。
>```
>
>**示例 2：**
>
>```
>输入：nums = [1,2,3,5]
>输出：false
>解释：数组不能分割成两个元素和相等的子集。
>```
>
>**提示：**
>
>- `1 <= nums.length <= 200`
>
>- `1 <= nums[i] <= 100`
>
>  ​    
>
>**思路：**
>
>* 分割两个等和子集，则表示整个和是2的倍数，目标和为总和的1/2；
>* 是动态规划中01背包问题，背包要放入的商品（集合里的元素）重量为元素的数值，价值也为元素的数值
>* 背包中每一个元素是不可重复放入
>* dp[j]含义：**dp[j]表示 背包总容量（所能装的总重量）是j，放进物品后，背的最大重量为dp[j]**
>* 推导公式：dp[j] = max(dp[j], dp[j-num]+num);
>* 遍历顺序，先遍历物品(即数组元素)再遍历背包容量

```java
class Solution {
    public boolean canPartition(int[] nums) {
        int sum = 0;
        for (int num : nums) {
            sum += num;
        }

        if (sum % 2 != 0) {
            return false;
        }

        int target = sum / 2;
        int[] dp = new int[target + 1];

        for (int num : nums) {
            for (int j = target; j >= num; j--) {
                dp[j] = Math.max(dp[j], dp[j - num] + num);
            }

            if (dp[target] == target) {
                return true;
            }
        }

        return dp[target] == target;
    }
}
```

