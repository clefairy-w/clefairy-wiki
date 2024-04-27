-  [738. 单调递增的数字](https://leetcode.cn/problems/monotone-increasing-digits/)
-  [714. 买卖股票的最佳时机含手续费](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)
-  [968. 监控二叉树](https://leetcode.cn/problems/binary-tree-cameras/)

----

#### 738. 单调递增的数字

>当且仅当每个相邻位数上的数字 x 和 y 满足 x <= y 时，我们称这个整数是单调递增的。
>
>给定一个整数 n ，返回 小于或等于 n 的最大数字，且数字呈 单调递增 。
>
>
>
>示例 1:
>
>输入: n = 10
>输出: 9
>示例 2:
>
>输入: n = 1234
>输出: 1234
>示例 3:
>
>输入: n = 332
>输出: 299
>
>
>提示:
>
>0 <= n <= 109

```java
class Solution {
    public int monotoneIncreasingDigits(int n) {
        char[] strN = Integer.toString(n).toCharArray();
        int i = 1;
        while (i < strN.length && strN[i - 1] <= strN[i]) {
            i += 1;
        }

        if (i < strN.length) {
            while (i > 0 && strN[i - 1] > strN[i]) {
                strN[i - 1] -= 1;
                i -= 1;
            }
            for (i += 1; i < strN.length; i++) {
                strN[i] = '9';
            }
        }

        return Integer.parseInt(new String(strN));
    }
}
```



#### 714. 买卖股票的最佳时机含手续费

>给定一个整数数组 prices，其中 prices[i]表示第 i 天的股票价格 ；整数 fee 代表了交易股票的手续费用。
>
>你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。
>
>返回获得利润的最大值。
>
>注意：这里的一笔交易指买入持有并卖出股票的整个过程，每笔交易你只需要为支付一次手续费。
>
>
>
>示例 1：
>
>输入：prices = [1, 3, 2, 8, 4, 9], fee = 2
>输出：8
>解释：能够达到的最大利润:  
>在此处买入 prices[0] = 1
>在此处卖出 prices[3] = 8
>在此处买入 prices[4] = 4
>在此处卖出 prices[5] = 9
>总利润: ((8 - 1) - 2) + ((9 - 4) - 2) = 8
>示例 2：
>
>输入：prices = [1,3,7,5,10,3], fee = 3
>输出：6
>
>
>提示：
>
>1 <= prices.length <= 5 * 104
>1 <= prices[i] < 5 * 104
>0 <= fee < 5 * 104

```java
class Solution {
    public int maxProfit(int[] prices, int fee) {
        int n = prices.length;
        int buy = prices[0] + fee;
        int profit = 0;
        for (int i = 1; i < n; i++) {
            if (prices[i] + fee < buy) {
                buy = prices[i] + fee;
            } else if (prices[i] > buy) {
                profit += prices[i] - buy;
                buy = prices[i];
            }
        }
        
        return profit;
    }
}
```



#### 968.监控二叉树

>给定一个二叉树，我们在树的节点上安装摄像头。
>
>节点上的每个摄影头都可以监视**其父对象、自身及其直接子对象。**
>
>计算监控树的所有节点所需的最小摄像头数量。
>
>**示例 1：**
>
>![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/29/bst_cameras_01.png)
>
>```
>输入：[0,0,null,0,0]
>输出：1
>解释：如图所示，一台摄像头足以监控所有节点。
>```
>
>**示例 2：**
>
>![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/29/bst_cameras_02.png)
>
>```
>输入：[0,0,null,0,null,0,null,null,0]
>输出：2
>解释：需要至少两个摄像头来监视树的所有节点。 上图显示了摄像头放置的有效位置之一。
>**提示：**
>```
>
>1. 给定树的节点数的范围是 `[1, 1000]`。
>2. 每个节点的值都是 0。

**AC代码**

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    int ans = 0;

    public int minCameraCover(TreeNode root) {
        if (minCamera(root) == 0) {
            ans++;
        }

        return ans;
    }

    /**
     * 0:无覆盖
     * 1:有摄像头
     * 2:有覆盖
     * 后序遍历，左右中
     */
    public int minCamera(TreeNode node) {
        if (node == null) {
            return 2;
        }

        int left = minCamera(node.left);
        int right = minCamera(node.right);
        if (left == 2 && right == 2) {
            return 0;
        } else if (left == 0 || right == 0) {
            ans++;
            return 1;
        } else {
            return 2;
        }
    }
}
```

