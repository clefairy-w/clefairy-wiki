-  [144. 二叉树的前序遍历](https://leetcode.cn/problems/binary-tree-preorder-traversal/)
-  [145. 二叉树的后序遍历](https://leetcode.cn/problems/binary-tree-postorder-traversal/)
-  [94. 二叉树的中序遍历](https://leetcode.cn/problems/binary-tree-inorder-traversal/)

----

#### 144.二叉树的前序遍历

>给你二叉树的根节点 `root` ，返回它节点值的 **前序** 遍历。
>
>**示例 1：**
>
>![img](https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg)
>
>```
>输入：root = [1,null,2,3]
>输出：[1,2,3]
>```
>
>**示例 2：**
>
>```
>输入：root = []
>输出：[]
>```
>
>**示例 3：**
>
>```
>输入：root = [1]
>输出：[1]
>```
>
>**示例 4：**
>
>![img](https://assets.leetcode.com/uploads/2020/09/15/inorder_5.jpg)
>
>```
>输入：root = [1,2]
>输出：[1,2]
>```
>
>**示例 5：**
>
>![img](https://assets.leetcode.com/uploads/2020/09/15/inorder_4.jpg)
>
>```
>输入：root = [1,null,2]
>输出：[1,2]
>```
>
>**提示：**
>
>- 树中节点数目在范围 `[0, 100]` 内
>- `-100 <= Node.val <= 100`

###### 144.1.解题思路

>* 前序遍历过程是中左右

###### 144.2.AC代码-Java代码

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
    List<Integer> res = new ArrayList<>();

    public List<Integer> preorderTraversal(TreeNode root) {
        dfs(root);
        return res;
    }

    public void dfs(TreeNode node) {
        if (node == null) {
            return;
        }

        res.add(node.val);
        dfs(node.left);
        dfs(node.right);
    }
}
```



#### 145.二叉树的后序遍历

>给你一棵二叉树的根节点 `root` ，返回其节点值的 **后序遍历** 。
>
>**示例 1：**
>
>![img](https://assets.leetcode.com/uploads/2020/08/28/pre1.jpg)
>
>```
>输入：root = [1,null,2,3]
>输出：[3,2,1]
>```
>
>**示例 2：**
>
>```
>输入：root = []
>输出：[]
>```
>
>**示例 3：**
>
>```
>输入：root = [1]
>输出：[1]
>```
>
>**提示：**
>
>- 树中节点的数目在范围 `[0, 100]` 内
>- `-100 <= Node.val <= 100`

###### 144.1.解题思路

>* 后序遍历过程是左右中

###### 144.2.AC代码-Java代码

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
    List<Integer> res = new ArrayList<>();

    public List<Integer> postorderTraversal(TreeNode root) {
        dfs(root);
        return res;
    }

    public void dfs(TreeNode node) {
        if (node == null) {
            return;
        }

        dfs(node.left);
        dfs(node.right);
        res.add(node.val);
    }
}
```

```java
class Solution {
    List<Integer> res = new ArrayList<>();

    public List<Integer> preorderTraversal(TreeNode root) {
        if (root == null) {
            return res;
        }

        Stack<TreeNode> stack = new Stack<>();
        stack.push(root);
        while (!stack.isEmpty()) {
            TreeNode node = stack.pop();
            res.add(node.val);
            if (node.right != null) {
                stack.push(node.right);
            }
            if (node.left != null) {
                stack.push(node.left);
            }
        }

        return res;
    }

}
```



#### 94.二叉树的中序遍历

>给定一个二叉树的根节点 `root` ，返回 *它的 **中序** 遍历* 。
>
>**示例 1：**
>
>![img](https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg)
>
>```
>输入：root = [1,null,2,3]
>输出：[1,3,2]
>```
>
>**示例 2：**
>
>```
>输入：root = []
>输出：[]
>```
>
>**示例 3：**
>
>```
>输入：root = [1]
>输出：[1]
>```
>
>**提示：**
>
>- 树中节点数目在范围 `[0, 100]` 内
>- `-100 <= Node.val <= 100`

###### 144.1.解题思路

>* 中序遍历过程-左中右

###### 144.2.AC代码-Java代码

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
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        inOrder(root, res);

        return res;
    }

    public void inOrder(TreeNode node, List<Integer> res) {
        if (node == null) {
            return;
        }

        inOrder(node.left, res);
        res.add(node.val);
        inOrder(node.right, res);
    }
}
```

