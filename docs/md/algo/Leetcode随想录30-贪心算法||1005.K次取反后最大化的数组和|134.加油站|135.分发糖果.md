-  [1005. K 次取反后最大化的数组和](https://leetcode.cn/problems/maximize-sum-of-array-after-k-negations/)
-  [134. 加油站](https://leetcode.cn/problems/gas-station/)
-  [135. 分发糖果](https://leetcode.cn/problems/candy/)

-----

#### 1005. K 次取反后最大化的数组和

>给你一个整数数组 nums 和一个整数 k ，按以下方法修改该数组：
>
>选择某个下标 i 并将 nums[i] 替换为 -nums[i] 。
>重复这个过程恰好 k 次。可以多次选择同一个下标 i 。
>
>以这种方式修改数组后，返回数组 可能的最大和 。
>
> 
>
>示例 1：
>
>输入：nums = [4,2,3], k = 1
>输出：5
>解释：选择下标 1 ，nums 变为 [4,-2,3] 。
>示例 2：
>
>输入：nums = [3,-1,0,2], k = 3
>输出：6
>解释：选择下标 (1, 2, 2) ，nums 变为 [3,1,0,2] 。
>示例 3：
>
>输入：nums = [2,-3,-1,5,-4], k = 2
>输出：13
>解释：选择下标 (1, 4) ，nums 变为 [2,3,-1,5,4] 。
>
>
>提示：
>
>1 <= nums.length <= 104
>-100 <= nums[i] <= 100
>1 <= k <= 104

```java
class Solution {
    public int largestSumAfterKNegations(int[] nums, int k) {
        Arrays.sort(nums);
        int len = nums.length;
        int sum = 0;
        if (nums[0] >= 0) {
            if (k % 2 != 0) {
                nums[0] = -nums[0];
            }
        } else {
            int j = 0;
            int i = 0;
            for (; i < len && nums[i] <= 0 && j < k; i++) {
                if (nums[i] < 0) {
                    nums[i] = -nums[i];
                    j++;
                }
                if (nums[i] == 0) {
                    j = k;
                }
            }
            if (j < k) {
                Arrays.sort(nums);
                if( (k-j) %2 != 0){
                    nums[0] = -nums[0];
                }
            }

        }
        return calculateSum(nums, sum);
    }

    public int calculateSum(int[] nums, int sum) {
        for (int num : nums) {
            sum += num;
        }

        return sum;
    }
}
```

**AC代码**

```java
class Solution {
    public int largestSumAfterKNegations(int[] nums, int k) {
        nums = IntStream.of(nums).boxed().sorted((o1, o2) ->
                Math.abs(o2) - Math.abs(o1)).mapToInt(Integer::intValue).toArray();
        int n = nums.length;
        for (int i = 0; i < n; i++) {
            if (nums[i] < 0 && k > 0) {
                nums[i] = -nums[i];
                k--;
            }
        }

        if (k % 2 == 1) {
            nums[n - 1] = -nums[n - 1];
        }

        return Arrays.stream(nums).sum();
    }
}
```



#### [134. 加油站](https://leetcode.cn/problems/gas-station/)

>在一条环路上有 n 个加油站，其中第 i 个加油站有汽油 gas[i] 升。
>
>你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。
>
>给定两个整数数组 gas 和 cost ，如果你可以按顺序绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1 。如果存在解，则 保证 它是 唯一 的。
>
> 
>
>示例 1:
>
>输入: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
>输出: 3
>解释:
>从 3 号加油站(索引为 3 处)出发，可获得 4 升汽油。此时油箱有 = 0 + 4 = 4 升汽油
>开往 4 号加油站，此时油箱有 4 - 1 + 5 = 8 升汽油
>开往 0 号加油站，此时油箱有 8 - 2 + 1 = 7 升汽油
>开往 1 号加油站，此时油箱有 7 - 3 + 2 = 6 升汽油
>开往 2 号加油站，此时油箱有 6 - 4 + 3 = 5 升汽油
>开往 3 号加油站，你需要消耗 5 升汽油，正好足够你返回到 3 号加油站。
>因此，3 可为起始索引。
>示例 2:
>
>输入: gas = [2,3,4], cost = [3,4,3]
>输出: -1
>解释:
>你不能从 0 号或 1 号加油站出发，因为没有足够的汽油可以让你行驶到下一个加油站。
>我们从 2 号加油站出发，可以获得 4 升汽油。 此时油箱有 = 0 + 4 = 4 升汽油
>开往 0 号加油站，此时油箱有 4 - 3 + 2 = 3 升汽油
>开往 1 号加油站，此时油箱有 3 - 3 + 3 = 3 升汽油
>你无法返回 2 号加油站，因为返程需要消耗 4 升汽油，但是你的油箱只有 3 升汽油。
>因此，无论怎样，你都不可能绕环路行驶一周。
>
>
>提示:
>
>gas.length == n
>cost.length == n
>1 <= n <= 105
>0 <= gas[i], cost[i] <= 104

```java
class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int gasSum = 0;
        int costSum = 0;
        for (int i : gas) {
            gasSum += i;
        }
        for (int i : cost) {
            costSum += i;
        }

        if (gasSum < costSum) {
            return -1;
        }

        int n = gas.length;
        int start = -1;
        for (int i = 0; i < n; i++) {
            if(gas[i] == 0 && cost[i] ==0){
                continue;
            }
            int k = calculateCost(gas, cost, i);
            if (k != -1) {
                start = k;
                break;
            }
        }

        return start;
    }

    public int calculateCost(int[] gas, int[] cost, int start) {
        int v = 0;
        for (int i = start; i < gas.length; i++) {
            v = v + gas[i] - cost[i];
            if (v < 0) {
                return -1;
            }
        }

        for (int i = 0; i < start; i++) {
            v = v + gas[i] - cost[i];
            if (v < 0) {
                return -1;
            }
        }

        return start;
    }
}
```



**AC代码**

```java
class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int curRest = 0;
        int totalRest = 0;
        int start = 0;
        int n = gas.length;
        for (int i = 0; i < n; i++) {
            curRest += gas[i] - cost[i];
            totalRest += gas[i] - cost[i];
            if (curRest < 0) {
                start = i + 1;
                curRest = 0;
            }
        }

        return totalRest < 0 ? -1 : start;
    }
}
```



#### 135.分发糖果

>`n` 个孩子站成一排。给你一个整数数组 `ratings` 表示每个孩子的评分。
>
>你需要按照以下要求，给这些孩子分发糖果：
>
>- 每个孩子至少分配到 `1` 个糖果。
>- 相邻两个孩子评分更高的孩子会获得更多的糖果。
>
>请你给每个孩子分发糖果，计算并返回需要准备的 **最少糖果数目** 。
>
>**示例 1：**
>
>```
>输入：ratings = [1,0,2]
>输出：5
>解释：你可以分别给第一个、第二个、第三个孩子分发 2、1、2 颗糖果。
>```
>
>**示例 2：**
>
>```
>输入：ratings = [1,2,2]
>输出：4
>解释：你可以分别给第一个、第二个、第三个孩子分发 1、2、1 颗糖果。
>     第三个孩子只得到 1 颗糖果，这满足题面中的两个条件。
>```
>
>**提示：**
>
>- `n == ratings.length`
>- `1 <= n <= 2 * 104`
>- `0 <= ratings[i] <= 2 * 104`

**AC代码**

```java
class Solution {
    public int candy(int[] ratings) {
        int n = ratings.length;
        int[] candy = new int[n];
        candy[0] = 1;

        for (int i = 1; i < n; i++) {
            candy[i] = ratings[i] > ratings[i - 1] ? candy[i - 1] + 1 : 1;
        }

        for (int i = n - 2; i >= 0; i--) {
            if (ratings[i] > ratings[i + 1]) {
                candy[i] = Math.max(candy[i], candy[i + 1] + 1);
            }
        }

        int count = 0;
        for (int can : candy) {
            count += can;
        }

        return count;
    }
}
```

