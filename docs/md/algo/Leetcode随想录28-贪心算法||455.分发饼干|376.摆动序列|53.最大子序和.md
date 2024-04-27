-  [455. 分发饼干](https://leetcode.cn/problems/assign-cookies/)
-  [376. 摆动序列](https://leetcode.cn/problems/wiggle-subsequence/)
-  [53. 最大子数组和](https://leetcode.cn/problems/maximum-subarray/)

-----

#### [455. 分发饼干](https://leetcode.cn/problems/assign-cookies/)

>假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。
>
>对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。
>
>
>示例 1:
>
>输入: g = [1,2,3], s = [1,1]
>输出: 1
>解释: 
>你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。
>虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。
>所以你应该输出1。
>示例 2:
>
>输入: g = [1,2], s = [1,2,3]
>输出: 2
>解释: 
>你有两个孩子和三块小饼干，2个孩子的胃口值分别是1,2。
>你拥有的饼干数量和尺寸都足以让所有孩子满足。
>所以你应该输出2.
>
>
>提示：
>
>1 <= g.length <= 3 * 104
>0 <= s.length <= 3 * 104
>1 <= g[i], s[j] <= 231 - 1

```java
class Solution {
    public int findContentChildren(int[] g, int[] s) {
        Arrays.sort(g);
        Arrays.sort(s);

        int count = 0;

        for (int i = 0, j = 0; i < g.length && j < s.length; ) {
            if (s[j] < g[i]) {
                j++;
            } else {
                i++;
                j++;
                count++;
            }
        }

        return count;
    }
}
```



#### [376. 摆动序列](https://leetcode.cn/problems/wiggle-subsequence/)

>如果连续数字之间的差严格地在正数和负数之间交替，则数字序列称为 摆动序列 。第一个差（如果存在的话）可能是正数或负数。仅有一个元素或者含两个不等元素的序列也视作摆动序列。
>
>例如， [1, 7, 4, 9, 2, 5] 是一个 摆动序列 ，因为差值 (6, -3, 5, -7, 3) 是正负交替出现的。
>
>相反，[1, 4, 7, 2, 5] 和 [1, 7, 4, 5, 5] 不是摆动序列，第一个序列是因为它的前两个差值都是正数，第二个序列是因为它的最后一个差值为零。
>子序列 可以通过从原始序列中删除一些（也可以不删除）元素来获得，剩下的元素保持其原始顺序。
>
>给你一个整数数组 nums ，返回 nums 中作为 摆动序列 的 最长子序列的长度 。
>
> 
>
>示例 1：
>
>输入：nums = [1,7,4,9,2,5]
>输出：6
>解释：整个序列均为摆动序列，各元素之间的差值为 (6, -3, 5, -7, 3) 。
>示例 2：
>
>输入：nums = [1,17,5,10,13,15,10,5,16,8]
>输出：7
>解释：这个序列包含几个长度为 7 摆动序列。
>其中一个是 [1, 17, 10, 13, 10, 16, 8] ，各元素之间的差值为 (16, -7, 3, -3, 6, -8) 。
>示例 3：
>
>输入：nums = [1,2,3,4,5,6,7,8,9]
>输出：2
>
>
>提示：
>
>1 <= nums.length <= 1000
>0 <= nums[i] <= 1000

```java
class Solution {
    public int wiggleMaxLength(int[] nums) {
        int len = nums.length;
        if (len < 2) {
            return 1;
        }

        int preDiff = nums[1] - nums[0];
        int ans = preDiff != 0 ? 2 : 1;
        for (int i = 2; i < len; i++) {
            int diff = nums[i] - nums[i - 1];
            if ((diff > 0 && preDiff <= 0) || (diff < 0 && preDiff >= 0)) {
                ans++;
                preDiff = diff;
            }
        }

        return ans;
    }
}
```



#### [53. 最大子数组和](https://leetcode.cn/problems/maximum-subarray/)

>给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
>
>子数组 是数组中的一个连续部分。
>
> 
>
>示例 1：
>
>输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
>输出：6
>解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
>示例 2：
>
>输入：nums = [1]
>输出：1
>示例 3：
>
>输入：nums = [5,4,-1,7,8]
>输出：23
>
>
>提示：
>
>1 <= nums.length <= 105
>-104 <= nums[i] <= 104

```java
class Solution {
    public int maxSubArray(int[] nums) {
        int len = nums.length;
        int sum = 0;
        int max = Integer.MIN_VALUE;
        for (int i = 1; i < len; i++) {
            sum += nums[i];
            max = Math.max(sum, max);
          	// 小于0时，即表示需要重新开始寻找子串
            if (sum < 0) {
                sum = 0;
            }
        }

        return max;
    }
}
```

