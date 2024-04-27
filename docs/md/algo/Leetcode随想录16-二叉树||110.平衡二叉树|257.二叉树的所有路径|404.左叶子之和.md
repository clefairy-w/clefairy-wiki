-  [110. 平衡二叉树](https://leetcode.cn/problems/balanced-binary-tree/)
-  [257. 二叉树的所有路径](https://leetcode.cn/problems/binary-tree-paths/)
-  [404. 左叶子之和](https://leetcode.cn/problems/sum-of-left-leaves/)

----

#### 110. 平衡二叉树

>给定一个二叉树，判断它是否是高度平衡的二叉树。
>
>本题中，一棵高度平衡二叉树定义为：
>
>> 一个二叉树*每个节点* 的左右两个子树的高度差的绝对值不超过 1 。
>
> 
>
>**示例 1：**
>
>![img](https://assets.leetcode.com/uploads/2020/10/06/balance_1.jpg)
>
>```
>输入：root = [3,9,20,null,null,15,7]
>输出：true
>```
>
>**示例 2：**
>
>![img](https://assets.leetcode.com/uploads/2020/10/06/balance_2.jpg)
>
>```
>输入：root = [1,2,2,3,3,null,null,4,4]
>输出：false
>```
>
>**示例 3：**
>
>```
>输入：root = []
>输出：true
>```
>
> 
>
>**提示：**
>
>- 树中的节点数在范围 `[0, 5000]` 内
>- `-104 <= Node.val <= 104`

###### 110.1. 解题思路

>**当前树的深度** 等于 **左子树的深度** 与 **右子树的深度** 中的 **最大值** +1 。

###### 110.2. AC代码-Java版本

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

/**
* 先序遍历 + 判断深度 （从顶至底）
*/
class Solution {
    public boolean isBalanced(TreeNode root) {
      	if (root == null) {
          	return true;
        }
        return Math.abs(height(root.left) - height(root.right)) <= 1 && isBalanced(root.right) && isBalanced(root.left);
    }

    public int height(TreeNode node) {
      
        if (node == null) {
            return 0;
        } 
        return Math.max(height(node.left), height(node.right)) + 1;
    }
}
```

```java
/**
* 后序遍历 + 剪枝 （从底至顶）
*/
class Solution {
    public boolean isBalanced(TreeNode root) {
        return recur(root) != -1;
    }

    private int recur(TreeNode root) {
        if (root == null) return 0;
        int left = recur(root.left);
        if (left == -1) return -1;
        int right = recur(root.right);
        if (right == -1) return -1;
        return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1;
    }
}
```



#### 257. 二叉树的所有路径

>给你一个二叉树的根节点 `root` ，按 **任意顺序** ，返回所有从根节点到叶子节点的路径。
>
>**叶子节点** 是指没有子节点的节点。
>
> 
>
>**示例 1：**
>
>![img](https://assets.leetcode.com/uploads/2021/03/12/paths-tree.jpg)
>
>```
>输入：root = [1,2,3,null,5]
>输出：["1->2->5","1->3"]
>```
>
>**示例 2：**
>
>```
>输入：root = [1]
>输出：["1"]
>```
>
> 
>
>**提示：**
>
>- 树中节点的数目在范围 `[1, 100]` 内
>- `-100 <= Node.val <= 100`

###### 257.1. 解题思路

>

###### 257.2. AC代码-Java版本

```java
class Solution {
    public List<String> binaryTreePaths(TreeNode root) {
        List<String> res = new ArrayList<>();
        if(root == null){
            return res;
        }

        if(root.left == null && root.right == null){
            res.add(root.val + "");
        }

        for(String path : binaryTreePaths(root.left)){
            res.add(root.val + "->" + path);
        }

        for(String path : binaryTreePaths(root.right)){
            res.add(root.val + "->" + path);
        }
        
        return res;
    }
}
```



#### 404. 左叶子之和

>给定二叉树的根节点 `root` ，返回所有左叶子之和。
>
> 
>
>**示例 1：**
>
>![img](https://assets.leetcode.com/uploads/2021/04/08/leftsum-tree.jpg)
>
>```
>输入: root = [3,9,20,null,null,15,7] 
>输出: 24 
>解释: 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
>```
>
>**示例 2:**
>
>```
>输入: root = [1]
>输出: 0
>```
>
> 
>
>**提示:**
>
>- 节点数在 `[1, 1000]` 范围内
>- `-1000 <= Node.val <= 1000`

###### 404.1. 解题思路

>

###### 404.2. AC代码-Java版本

```java
/**
* 时间复杂度O(N)
* 空间复杂度O(N)
*/
class Solution {
    public boolean isLeafNode(TreeNode node){
        return node.left == null && node.right == null;
    }


    public int leftLeavesNode(TreeNode node){
        int ans = 0;
        if(node.left != null){
            ans += isLeafNode(node.left) ? node.left.val : leftLeavesNode(node.left);
        }
        if(node.right != null && !isLeafNode(node.right)){
            ans += leftLeavesNode(node.right);
        }

        return ans;
    }

    public int sumOfLeftLeaves(TreeNode root) {
        return root != null ? leftLeavesNode(root) : 0;
    }
}
```

