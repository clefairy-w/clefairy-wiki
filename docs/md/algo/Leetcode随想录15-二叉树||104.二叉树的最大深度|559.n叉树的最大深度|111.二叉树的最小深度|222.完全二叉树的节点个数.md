-  [104. 二叉树的最大深度](https://leetcode.cn/problems/maximum-depth-of-binary-tree/)
-  [559. N 叉树的最大深度](https://leetcode.cn/problems/maximum-depth-of-n-ary-tree/)
-  [111. 二叉树的最小深度](https://leetcode.cn/problems/minimum-depth-of-binary-tree/)

----

#### 104.二叉树的最大深度

>给定一个二叉树 `root` ，返回其最大深度。
>
>二叉树的 **最大深度** 是指从根节点到最远叶子节点的最长路径上的节点数。
>
> 
>
>**示例 1：**
>
>![img](https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg)
>
> 
>
>```
>输入：root = [3,9,20,null,null,15,7]
>输出：3
>```
>
>**示例 2：**
>
>```
>输入：root = [1,null,2]
>输出：2
>```

###### 104.1.解题思路

>1. 树的遍历方式总体分为两类：深度优先搜索（DFS）、广度优先搜索（BFS）。
>
>常见 DFS ： 先序遍历、中序遍历、后序遍历。
>常见 BFS ： 层序遍历（即按层遍历）。
>
>   **关键点：** 此树的深度和其左（右）子树的深度之间的关系。显然，**此树的深度** 等于 **左子树的深度** 与 **右子树的深度**中的 **最大值** +1 。
>
>2. 树的层序遍历 / 广度优先搜索往往利用 **队列** 实现。
>
>   **关键点：** 每遍历一层，则计数器 +1+1+1 ，直到遍历完成，则可得到树的深度。

###### 104.2.AC代码-Java版本

```java
/**
* 层序遍历
* 时间复杂度O(N),空间复杂度O(N)
*/
class Solution {
    public int maxDepth(TreeNode root) {
        if (root == null) return 0;
        List<TreeNode> queue = new LinkedList<>() {{ add(root); }}, tmp;
        int res = 0;
        while (!queue.isEmpty()) {
            tmp = new LinkedList<>();
            for(TreeNode node : queue) {
                if (node.left != null) tmp.add(node.left);
                if (node.right != null) tmp.add(node.right);
            }
            queue = tmp;
            res++;
        }
        return res;
    }
}

```

```java
/**
* 后序遍历
* 时间复杂度O(N),空间复杂度O(N)
*/
class Solution {
    public int maxDepth(TreeNode root) {
        if (root == null) return 0;
        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    }
}
```



#### 559.N叉树的最大深度

>给定一个 N 叉树，找到其最大深度。
>
>最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。
>
>N 叉树输入按层序遍历序列化表示，每组子节点由空值分隔（请参见示例）。
>
> 
>
>**示例 1：**
>
>![img](https://assets.leetcode.com/uploads/2018/10/12/narytreeexample.png)
>
>```
>输入：root = [1,null,3,2,4,null,5,6]
>输出：3
>```
>
>**示例 2：**
>
>![img](https://assets.leetcode.com/uploads/2019/11/08/sample_4_964.png)
>
>```
>输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
>输出：5
>```
>
> 
>
>**提示：**
>
>- 树的深度不会超过 `1000` 。
>- 树的节点数目位于 `[0, 104]` 之间。

###### 559.1.解题思路

>`DFS` 实现：从 rootroot*roo**t* 的所有子节点中的取最大深度，并在此基础上加一
>
>`BFS` 实现：其本质是对多叉树进行层序处理，当 `BFS` 过程结束，意味着达到最大层数（深度）

###### 559.2.AC代码-Java版本

```java
class Solution {
    public int maxDepth(Node root) {
        if (root == null) return 0;
        int ans = 0;
        for (Node node : root.children) {
            ans = Math.max(ans, maxDepth(node));
        }
        return ans + 1;
    }
}
```

```java
class Solution {
    public int maxDepth(Node root) {
        if (root == null) return 0;
        int ans = 0;
        Deque<Node> d = new ArrayDeque<>();
        d.addLast(root);
        while (!d.isEmpty()) {
            int size = d.size();
            while (size-- > 0) {
                Node t = d.pollFirst();
                for (Node node : t.children) {
                    d.addLast(node);
                }
            }
            ans++;
        }
        return ans;
    }
}
```



#### 111.二叉树的最小深度

>给定一个二叉树，找出其最小深度。
>
>最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
>
>**说明：**叶子节点是指没有子节点的节点。
>
> 
>
>**示例 1：**
>
>![img](https://assets.leetcode.com/uploads/2020/10/12/ex_depth.jpg)
>
>```
>输入：root = [3,9,20,null,null,15,7]
>输出：2
>```
>
>**示例 2：**
>
>```
>输入：root = [2,null,3,null,4,null,5,null,6]
>输出：5
>```
>
> 
>
>**提示：**
>
>- 树中节点数的范围在 `[0, 105]` 内
>- `-1000 <= Node.val <= 1000`

###### 111.1.解题思路

>遍历整棵树，记录最小深度。对于每一个非叶子节点，我们只需要分别计算其左右子树的最小叶子节点深度。

###### 111.2.AC代码-Java版本

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
    public int minDepth(TreeNode root) {
        if(root == null) {
            return 0;
        }
        if(root.left == null && root.right == null) {
            return 1;
        }
        int ans = Integer.MAX_VALUE;
        if(root.left != null) {
            ans = Math.min(minDepth(root.left), ans);
        }
        if(root.right != null) {
            ans = Math.min(minDepth(root.right), ans);
        }
        return ans + 1;
    }
}
```

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
    public int minDepth(TreeNode root) {
        if(root == null) return 0 ;
        Queue<TreeNode> que = new LinkedList<TreeNode>();
        que.offer(root);
        int depth = 0;
        while(!que.isEmpty()){
            int size = que.size();
            depth++;
            
            for(int i=0;i<size;i++){
                TreeNode cur = que.poll();
                if(cur.left == null && cur.right == null) return depth;
                if(cur.left != null) que.offer(cur.left);
                if(cur.right != null) que.offer(cur.right);
            }
        }
        return depth;
    }
}
```

