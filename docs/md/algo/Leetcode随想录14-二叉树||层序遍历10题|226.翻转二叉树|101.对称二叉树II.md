- [x] [226. 翻转二叉树](https://leetcode.cn/problems/invert-binary-tree/)

- [x] [101. 对称二叉树](https://leetcode.cn/problems/symmetric-tree/)

-----

#### 226.翻转二叉树

>- 给你一棵二叉树的根节点 `root` ，翻转这棵二叉树，并返回其根节点。
>
>   
>
>  **示例 1：**
>
>  ![img](https://assets.leetcode.com/uploads/2021/03/14/invert1-tree.jpg)
>
>  ```
>  输入：root = [4,2,7,1,3,6,9]
>  输出：[4,7,2,9,6,3,1]
>  ```
>
>  **示例 2：**
>
>  ![img](https://assets.leetcode.com/uploads/2021/03/14/invert2-tree.jpg)
>
>  ```
>  输入：root = [2,1,3]
>  输出：[2,3,1]
>  ```
>
>  **示例 3：**
>
>  ```
>  输入：root = []
>  输出：[]
>  ```
>
>   
>
>  **提示：**
>
>  - 树中节点数目范围在 `[0, 100]` 内
>  - `-100 <= Node.val <= 100`

###### 226.1.解题思路

>二叉树镜像定义： 对于二叉树中任意节点 root ，设其左 / 右子节点分别为 left,right；则在二叉树的镜像中的对应 root 节点，其左 / 右子节点分别为 right,left。
>

###### 226.2.AC代码-Java版本

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
    public TreeNode invertTree(TreeNode root) {
        if(root == null){
            return null;
        }

        TreeNode left = invertTree(root.left);
        TreeNode right = invertTree(root.right);
        root.left = right;
        root.right = left;
        return root;
    }
}
```



#### 101.对称二叉树

>给你一个二叉树的根节点 `root` ， 检查它是否轴对称。
>
> 
>
>**示例 1：**
>
>![img](https://pic.leetcode.cn/1698026966-JDYPDU-image.png)
>
>```
>输入：root = [1,2,2,3,4,4,3]
>输出：true
>```
>
>**示例 2：**
>
>![img](https://pic.leetcode.cn/1698027008-nPFLbM-image.png)
>
>```
>输入：root = [1,2,2,null,3,null,3]
>输出：false
>```
>
> 
>
>**提示：**
>
>- 树中节点数目在范围 `[1, 1000]` 内
>- `-100 <= Node.val <= 100`
>
> 

###### 101.1.解题思路

>对称二叉树定义： 对于树中 任意两个对称节点 L 和 R ，一定有：
>
>L.val = R.val ：即此两对称节点值相等。
>L.left.val = R.right.val ：即 L 的 左子节点 和 R 的 右子节点 对称。
>L.right.val = R.left.val ：即 L 的 右子节点 和 R 的 左子节点 对称。

###### 101.2.AC代码-Java版本

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
    public boolean isSymmetric(TreeNode root) {
        return root == null || recur(root.left, root.right);
    }

    public boolean recur(TreeNode left, TreeNode right){
        if(left == null && right == null){
            return true;
        }

        if(left == null || right == null || left.val != right.val){
            return false;
        }

        return recur(left.left, right.right) && recur(left.right, right.left);
    }
}
```

