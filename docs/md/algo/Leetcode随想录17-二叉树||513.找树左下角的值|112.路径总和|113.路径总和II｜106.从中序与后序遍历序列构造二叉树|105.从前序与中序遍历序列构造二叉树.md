-  [513. 找树左下角的值](https://leetcode.cn/problems/find-bottom-left-tree-value/)
-  [112. 路径总和](https://leetcode.cn/problems/path-sum/)
-  [113. 路径总和 II](https://leetcode.cn/problems/path-sum-ii/)
-  [105. 从前序与中序遍历序列构造二叉树](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)
-  [106. 从中序与后序遍历序列构造二叉树](https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)

-----

#### 513. 找树左下角的值

>给定一个二叉树的 **根节点** `root`，请找出该二叉树的 **最底层 最左边** 节点的值。
>
>假设二叉树中至少有一个节点。
>
> 
>
>**示例 1:**
>
>![img](https://assets.leetcode.com/uploads/2020/12/14/tree1.jpg)
>
>```
>输入: root = [2,1,3]
>输出: 1
>```
>
>**示例 2:**
>
>![img](https://assets.leetcode.com/uploads/2020/12/14/tree2.jpg)
>
>```
>输入: [1,2,3,4,null,5,6,null,null,7]
>输出: 7
>```
>
> 
>
>**提示:**
>
>- 二叉树的节点个数的范围是 `[1,104]`
>- `-231 <= Node.val <= 231 - 1` 

###### 513.1.解题思路

>使用广度优先搜索遍历每一层的节点。在遍历一个节点时，需要先把它的非空右子节点放入队列，然后再把它的非空左子节点放入队列，这样才能保证从右到左遍历每一层的节点。广度优先搜索所遍历的最后一个节点的值就是最底层最左边节点的值。
>

###### 513.2.AC代码-Java版本

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
    public int findBottomLeftValue(TreeNode root) {
        int ret = 0;
        Queue<TreeNode> queue = new ArrayDeque<TreeNode>();
        queue.offer(root);
        while (!queue.isEmpty()) {
            TreeNode p = queue.poll();
            if (p.right != null) {
                queue.offer(p.right);
            }
            if (p.left != null) {
                queue.offer(p.left);
            }
            ret = p.val;
        }
        return ret;
    }
}
```



#### 112. 路径总和

>

###### 112.1.解题思路

>询问是否存在从当前节点 root 到叶子节点的路径，满足其路径和为 sum。
>
>假定从根节点到当前节点的值之和为 val，我们可以将这个大问题转化为一个小问题：是否存在从当前节点的子节点到叶子的路径，满足其路径和为 sum - val。
>

###### 112.2.AC代码-Java版本

```java
class Solution {
    public boolean hasPathSum(TreeNode root, int targetSum) {

        if (root == null) {
            return false;
        }

        if (root.left == null && root.right == null) {
            return targetSum == root.val;
        }

        return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);

    }
}
```

#### 113. 路径总和 II

>给你二叉树的根节点 `root` 和一个整数目标和 `targetSum` ，找出所有 **从根节点到叶子节点** 路径总和等于给定目标和的路径。
>
>**叶子节点** 是指没有子节点的节点。
>
> 
>
>**示例 1：**
>
>![img](https://assets.leetcode.com/uploads/2021/01/18/pathsumii1.jpg)
>
>```
>输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
>输出：[[5,4,11,2],[5,8,4,5]]
>```
>
>**示例 2：**
>
>![img](https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg)
>
>```
>输入：root = [1,2,3], targetSum = 5
>输出：[]
>```
>
>**示例 3：**
>
>```
>输入：root = [1,2], targetSum = 0
>输出：[]
>```
>
> 
>
>**提示：**
>
>- 树中节点总数在范围 `[0, 5000]` 内
>- `-1000 <= Node.val <= 1000`
>- `-1000 <= targetSum <= 1000`

###### 113.1.解题思路

>典型的回溯问题，解法包含先序遍历 + 路径记录两部分：
>
>先序遍历： 按照 “根、左、右” 的顺序，遍历树的所有节点。
>路径记录： 在先序遍历中，记录从根节点到当前节点的路径。当路径满足 (1) 根节点到叶节点形成的路径 且 (2) 各节点值的和等于目标值 targetSum 时，将此路径加入结果列表。

###### 113.2.AC代码-Java版本

```java
class Solution {
    List<List<Integer>> ret = new ArrayList<>();
    List<Integer> path = new ArrayList<>();

    public List<List<Integer>> pathSum(TreeNode root, int targetSum) {
        dfs(root, targetSum);
        
        return ret;
    }

    public void dfs(TreeNode root, int targetSum){
        if(root == null){
            return;
        }
        path.add(root.val);
        targetSum -= root.val;
        if(root.left == null && root.right == null && targetSum == 0){
            ret.add(new ArrayList<>(path));
        }
        
        dfs(root.left, targetSum);
        dfs(root.right, targetSum);
        path.remove(path.size() - 1);
    }
}
```



#### 105. 从前序与中序遍历序列构造二叉树

>给定两个整数数组 `preorder` 和 `inorder` ，其中 `preorder` 是二叉树的**先序遍历**， `inorder` 是同一棵树的**中序遍历**，请构造二叉树并返回其根节点。
>
> 
>
>**示例 1:**
>
>![img](https://assets.leetcode.com/uploads/2021/02/19/tree.jpg)
>
>```
>输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
>输出: [3,9,20,null,null,15,7]
>```
>
>**示例 2:**
>
>```
>输入: preorder = [-1], inorder = [-1]
>输出: [-1]
>```
>
> 
>
>**提示:**
>
>- `1 <= preorder.length <= 3000`
>- `inorder.length == preorder.length`
>- `-3000 <= preorder[i], inorder[i] <= 3000`
>- `preorder` 和 `inorder` 均 **无重复** 元素
>- `inorder` 均出现在 `preorder`
>- `preorder` **保证** 为二叉树的前序遍历序列
>- `inorder` **保证** 为二叉树的中序遍历序列

###### 105.1.解题思路

>前序遍历性质： 节点按照 [ 根节点 | 左子树 | 右子树 ] 排序。
>中序遍历性质： 节点按照 [ 左子树 | 根节点 | 右子树 ] 排序。
>
>以题目示例为例：
>
>前序遍历划分 [ 3 | 9 | 20 15 7 ]
>中序遍历划分 [ 9 | 3 | 15 20 7 ]
>根据以上性质，可得出以下推论：
>
>前序遍历的首元素 为 树的根节点 node 的值。
>在中序遍历中搜索根节点 node 的索引 ，可将 中序遍历 划分为 [ 左子树 | 根节点 | 右子树 ] 。
>根据中序遍历中的左（右）子树的节点数量，可将 前序遍历 划分为 [ 根节点 | 左子树 | 右子树 ] 。
>
>
>通过以上三步，可确定 三个节点 ：1.树的根节点、2.左子树根节点、3.右子树根节点。
>
>根据分治思想，对于树的左、右子树，仍可复用以上方法划分子树的左右子树。

###### 105.2.AC代码-Java版本

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
    int[] preorder;
    Map<Integer, Integer> dict = new HashMap<>();

    public TreeNode buildTree(int[] preorder, int[] inorder) {
        this.preorder = preorder;

        for (int i = 0; i < inorder.length; i++) {
            dict.put(inorder[i], i);
        }

        return recur(0, 0, preorder.length - 1);
    }

    TreeNode recur(int root, int left, int right) {
        if (left > right) {
            return null;
        }
        TreeNode node = new TreeNode(preorder[root]);
        int i = dict.get(preorder[root]);
        node.left = recur(root + 1, left, i - 1);
        node.right = recur(root + i - left + 1, i + 1, right);

        return node;
    }
}
```



#### 106. 从中序与后序遍历序列构造二叉树

>

###### 106.1.解题思路

>

###### 106.2.AC代码-Java版本

```java

```

