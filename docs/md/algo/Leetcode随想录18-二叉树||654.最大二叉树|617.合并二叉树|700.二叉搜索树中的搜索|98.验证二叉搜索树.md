-  [654. 最大二叉树](https://leetcode.cn/problems/maximum-binary-tree/)
-  [617. 合并二叉树](https://leetcode.cn/problems/merge-two-binary-trees/)
-  [700. 二叉搜索树中的搜索](https://leetcode.cn/problems/search-in-a-binary-search-tree/)
-  [98. 验证二叉搜索树](https://leetcode.cn/problems/validate-binary-search-tree/)

----

#### 654. 最大二叉树

>给定一个不重复的整数数组 nums 。 最大二叉树 可以用下面的算法从 nums 递归地构建:
>
>创建一个根节点，其值为 nums 中的最大值。
>递归地在最大值 左边 的 子数组前缀上 构建左子树。
>递归地在最大值 右边 的 子数组后缀上 构建右子树。
>返回 nums 构建的 最大二叉树 

###### 654.1.解题思路

>当 l>rl > rl>r 时，返回空节点，否则在 [l,r][l, r][l,r] 中进行扫描，找到最大值对应的下标 idx 并创建对应的头结点，递归构建 [l,idx−1][l, idx - 1][l,idx−1] 和 [idx+1,r][idx + 1, r][idx+1,r] 作为头节点的左右子树。
>

###### 654.2.AC代码- Java版本

```java
class Solution {
    public TreeNode constructMaximumBinaryTree(int[] nums) {
        return construct(nums, 0, nums.length - 1);

    }

    public TreeNode construct(int[] nums, int left, int right) {
        if (left > right) {
            return null;
        }

        int best = left;
        for (int i = left+1; i <= right; i++) {
            if (nums[best] < nums[i]) {
                best = i;
            }
        }

        TreeNode node = new TreeNode(nums[best]);
        node.left = construct(nums, left, best - 1);
        node.right = construct(nums, best + 1, right);
        return node;
    }
}
```



#### 617. 合并二叉树

>给你两棵二叉树： root1 和 root2 。
>
>想象一下，当你将其中一棵覆盖到另一棵之上时，两棵树上的一些节点将会重叠（而另一些不会）。你需要将这两棵树合并成一棵新二叉树。合并的规则是：如果两个节点重叠，那么将这两个节点的值相加作为合并后节点的新值；否则，不为 null 的节点将直接作为新二叉树的节点。
>
>返回合并后的二叉树。
>
>注意: 合并过程必须从两个树的根节点开始。
>

###### 617.1.解题思路

>两个二叉树的对应节点可能存在以下三种情况，对于每种情况使用不同的合并方式。
>
>- 如果两个二叉树的对应节点都为空，则合并后的二叉树的对应节点也为空；
>- 如果两个二叉树的对应节点只有一个为空，则合并后的二叉树的对应节点为其中的非空节点；
>- 如果两个二叉树的对应节点都不为空，则合并后的二叉树的对应节点的值为两个二叉树的对应节点的值之和，此时需要显性合并两个节点。
>
>对一个节点进行合并之后，还要对该节点的左右子树分别进行合并。这是一个递归的过程。
>

###### 617.2.AC代码-Java版本

```java
class Solution {
    public TreeNode mergeTrees(TreeNode root1, TreeNode root2) {
        if (root1 == null) {
            return root2;
        }

        if (root2 == null) {
            return root1;
        }

        TreeNode merged = new TreeNode(root1.val + root2.val);
        merged.left = mergeTrees(root1.left, root2.left);
        merged.right = mergeTrees(root1.right, root2.right);
        return merged;
    }
}
```



#### 700. 二叉搜索树中的搜索

>给定二叉搜索树（BST）的根节点 root 和一个整数值 val。
>
>你需要在 BST 中找到节点值等于 val 的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 null。
>

###### 700.1.解题思路

>二叉搜索树满足如下性质：
>
>- 左子树所有节点的元素值均小于根的元素值；
>- 右子树所有节点的元素值均大于根的元素值。
>
>若 root 为空则返回空节点；
>若 val=root.va，则返回 root；
>若 val<root.val，递归左子树；
>若 val>root.val，递归右子树。

###### 700.2.AC代码-Java版本

```java
class Solution {
    public TreeNode searchBST(TreeNode root, int val) {
        if (root == null) {
            return null;
        }
        if (val == root.val) {
            return root;
        }
        return searchBST(val < root.val ? root.left : root.right, val);
    }
}
```



#### 98. 验证二叉搜索树

>给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。
>
>有效 二叉搜索树定义如下：
>
>节点的左子树只包含 小于 当前节点的数。
>节点的右子树只包含 大于 当前节点的数。
>所有左子树和右子树自身必须也是二叉搜索树。

###### 98.1.解题思路

>如果该二叉树的左子树不为空，则左子树上所有节点的值均小于它的根节点的值； 若它的右子树不空，则右子树上所有节点的值均大于它的根节点的值；它的左右子树也为二叉搜索树。
>
>设计一个递归函数 helper(root, lower, upper) 来递归判断，函数表示考虑以 root 为根的子树，判断子树中所有节点的值是否都在 (l,r) 的范围内（注意是开区间）。如果 root 节点的值 val 不在 (l,r) 的范围内说明不满足条件直接返回，否则我们要继续递归调用检查它的左右子树是否满足，如果都满足才说明这是一棵二叉搜索树。
>
>在递归调用左子树时，我们需要把上界 upper 改为 root.val，即调用 helper(root.left, lower, root.val)，因为左子树里所有节点的值均小于它的根节点的值。同理递归调用右子树时，我们需要把下界 lower 改为 root.val，即调用 helper(root.right, root.val, upper)。
>
>函数递归调用的入口为 helper(root, -inf, +inf)， inf 表示一个无穷大的值。
>

###### 98.2.AC代码-Java版本

```java
class Solution {
    public boolean isValidBST(TreeNode root) {
        return isValidBST(root, Long.MIN_VALUE, Long.MAX_VALUE);
    }

    public boolean isValidBST(TreeNode node, long lower, long upper) {
        if (node == null) {
            return true;
        }
        if (node.val <= lower || node.val >= upper) {
            return false;
        }
        return isValidBST(node.left, lower, node.val) && isValidBST(node.right, node.val, upper);
    }

}
```

