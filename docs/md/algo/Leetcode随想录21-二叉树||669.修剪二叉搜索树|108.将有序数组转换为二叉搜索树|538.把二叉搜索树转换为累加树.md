- [ ] [669. 修剪二叉搜索树](https://leetcode.cn/problems/trim-a-binary-search-tree/)
- [ ] [108. 将有序数组转换为二叉搜索树](https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/)
- [ ] [538. 把二叉搜索树转换为累加树](https://leetcode.cn/problems/convert-bst-to-greater-tree/)

----

#### 669. 修剪二叉搜索树

>给你二叉搜索树的根节点 `root` ，同时给定最小边界`low` 和最大边界 `high`。通过修剪二叉搜索树，使得所有节点的值在`[low, high]`中。修剪树 **不应该** 改变保留在树中的元素的相对结构 (即，如果没有被移除，原有的父代子代关系都应当保留)。 可以证明，存在 **唯一的答案** 。
>
>所以结果应当返回修剪好的二叉搜索树的新的根节点。注意，根节点可能会根据给定的边界发生改变。
>
> 
>
>**示例 1：**
>
>![img](https://assets.leetcode.com/uploads/2020/09/09/trim1.jpg)
>
>```
>输入：root = [1,0,2], low = 1, high = 2
>输出：[1,null,2]
>```
>
>**示例 2：**
>
>![img](https://assets.leetcode.com/uploads/2020/09/09/trim2.jpg)
>
>```
>输入：root = [3,0,4,null,2,null,null,1], low = 1, high = 3
>输出：[3,2,null,1]
>```
>
> 
>
>**提示：**
>
>- 树中节点数在范围 `[1, 104]` 内
>- `0 <= Node.val <= 104`
>- 树中每个节点的值都是 **唯一** 的
>- 题目数据保证输入是一棵有效的二叉搜索树
>- `0 <= low <= high <= 104`

###### 669.1.解题思路

>对根结点 root进行深度优先遍历。对于当前访问的结点，如果结点为空结点，直接返回空结点；如果结点的值小于 low，那么说明该结点及它的左子树都不符合要求，我们返回对它的右结点进行修剪后的结果；如果结点的值大于 high，那么说明该结点及它的右子树都不符合要求，我们返回对它的左子树进行修剪后的结果；如果结点的值位于区间[low,high]，我们将结点的左结点设为对它的左子树修剪后的结果，右结点设为对它的右子树进行修剪后的结果。

###### 669.2.AC代码-Java版本

```java
class Solution {
    public TreeNode trimBST(TreeNode root, int low, int high) {
        if (root == null) {
            return null;
        }

        if (root.val < low) {
            return trimBST(root.right, low, high);
        } else if (root.val > high) {
            return trimBST(root.left, low, high);
        } else {
            root.left = trimBST(root.left, low, high);
            root.right = trimBST(root.right, low, high);
        }

        return root;
    }
}
```



#### 108. 将有序数组转换为二叉搜索树

>给你一个整数数组 `nums` ，其中元素已经按 **升序** 排列，请你将其转换为一棵平衡二叉搜索树。
>
>
>
>**示例 1：**
>
>![img](https://assets.leetcode.com/uploads/2021/02/18/btree1.jpg)
>
>```
>输入：nums = [-10,-3,0,5,9]
>输出：[0,-3,9,-10,null,5]
>解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：
>```
>
>**示例 2：**
>
>![img](https://assets.leetcode.com/uploads/2021/02/18/btree.jpg)
>
>```
>输入：nums = [1,3]
>输出：[3,1]
>解释：[1,null,3] 和 [3,1] 都是高度平衡二叉搜索树。
>```
>
> 
>
>**提示：**
>
>- `1 <= nums.length <= 104`
>- `-104 <= nums[i] <= 104`
>- `nums` 按 **严格递增** 顺序排列

###### 108.1.解题思路

>高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。
>
>#### 中序遍历，总是选择中间位置左边的数字作为根节点
>
>在给定中序遍历序列数组的情况下，每一个子树中的数字在数组中一定是连续的，因此可以通过数组下标范围确定子树包含的数字，下标范围记为 [left,right]。对于整个中序遍历序列，下标范围从 left=0 到 right=nums.length−1。当 left>right 时，平衡二叉搜索树为空。
>

###### 108.2.AC代码-Java版本

```java
class Solution {
    public TreeNode sortedArrayToBST(int[] nums) {
        return saBTS(nums, 0, nums.length - 1);

    }

    public TreeNode saBTS(int[] nums, int left, int right) {
        if (left > right) {
            return null;
        }

        int mid = (left + right) / 2;
        TreeNode node = new TreeNode(nums[mid]);
        node.left = saBTS(nums, left, mid - 1);
        node.right = saBTS(nums, mid + 1, right);

        return node;

    }
}
```



#### 538. 把二叉搜索树转换为累加树

>给出二叉搜索树的根节点，该树的节点值各不相同，请你将其转换为累加树（Greater Sum Tree），使每个节点 node 的新值等于原树中大于或等于 node.val 的值之和。
>
>提醒一下，二叉搜索树满足下列约束条件：
>
>节点的左子树仅包含键 小于 节点键的节点。
>节点的右子树仅包含键 大于 节点键的节点。
>左右子树也必须是二叉搜索树。
>
>**示例 1：**
>
>**![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/05/03/tree.png)**
>
>```
>输入：[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
>输出：[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
>```
>
>**示例 2：**
>
>```
>输入：root = [0,null,1]
>输出：[1,null,1]
>```
>
>**示例 3：**
>
>```
>输入：root = [1,0,2]
>输出：[3,3,2]
>```
>
>**示例 4：**
>
>```
>输入：root = [3,2,4,1]
>输出：[7,9,4,10]
>```
>
> 
>
>**提示：**
>
>- 树中的节点数介于 `0` 和 `104` 之间。
>- 每个节点的值介于 `-104` 和 `104` 之间。
>- 树中的所有值 **互不相同** 。
>- 给定的树为二叉搜索树。

###### 538.1.解题思路

>二叉搜索树的中序遍历是一个单调递增的有序序列。反序地中序遍历该二叉搜索树，即可得到一个单调递减的有序序列。
>
>反序中序遍历该二叉搜索树，记录过程中的节点值之和，并不断更新当前遍历到的节点的节点值，即可得到题目要求的累加树。

###### 538.2.AC代码-Java版本

```java
class Solution {
    int sum = 0;
    public TreeNode convertBST(TreeNode root) {
        if (root != null) {
            convertBST(root.right);
            sum += root.val;
            root.val = sum;
            convertBST(root.left);
        }

        return root;
    }
}
```

