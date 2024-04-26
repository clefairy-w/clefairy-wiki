- [x] [530. 二叉搜索树的最小绝对差](https://leetcode.cn/problems/minimum-absolute-difference-in-bst/)
- [x] [501. 二叉搜索树中的众数](https://leetcode.cn/problems/find-mode-in-binary-search-tree/)
- [x] [236. 二叉树的最近公共祖先](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/)

----

#### 530. 二叉搜索树的最小绝对差

>给你一个二叉搜索树的根节点 `root` ，返回 **树中任意两不同节点值之间的最小差值** 。
>
>差值是一个正数，其数值等于两值之差的绝对值。
>
> 
>
>**示例 1：**
>
>![img](https://assets.leetcode.com/uploads/2021/02/05/bst1.jpg)
>
>```
>输入：root = [4,2,6,1,3]
>输出：1
>```
>
>**示例 2：**
>
>![img](https://assets.leetcode.com/uploads/2021/02/05/bst2.jpg)
>
>```
>输入：root = [1,0,48,null,null,12,49]
>输出：1
>```
>
> 
>
>**提示：**
>
>- 树中节点的数目范围是 `[2, 104]`
>- `0 <= Node.val <= 105`

###### 530.1.解题思路

>二叉搜索树有个性质为**二叉搜索树中序遍历得到的值序列是递增有序的**
>
>对升序数组 aa*a* 求任意两个元素之差的绝对值的最小值，答案一定为相邻两个元素之差的最小值

###### 530.2.AC代码-Java代码

```java
//时间复杂度：O(n)，其中 n 为二叉搜索树节点的个数。每个节点在中序遍历中都会被访问一次且只会被访问一次，因此总
//时间复杂度为 O(n)。
//空间复杂度: O(n)。递归函数的空间复杂度取决于递归的栈深度,而栈深度在二叉搜索树为一条链的情况下会达到 O(n)级
//别。
class Solution {
    int pre = -1;
    int ans = Integer.MAX_VALUE;

    public int getMinimumDifference(TreeNode root) {
        dfs(root);
        return ans;

    }

    public void dfs(TreeNode root) {
        if (root == null) {
            return;
        }

        dfs(root.left);
      
        if (pre != -1) {
            ans = Math.min(ans, Math.abs(root.val - pre));
        }
        pre = root.val;

        dfs(root.right);
    }
}
```



#### 501. 二叉搜索树中的众数

>给你一个含重复值的二叉搜索树（BST）的根节点 `root` ，找出并返回 BST 中的所有 [众数](https://baike.baidu.com/item/众数/44796)（即，出现频率最高的元素）。
>
>如果树中有不止一个众数，可以按 **任意顺序** 返回。
>
>假定 BST 满足如下定义：
>
>- 结点左子树中所含节点的值 **小于等于** 当前节点的值
>- 结点右子树中所含节点的值 **大于等于** 当前节点的值
>- 左子树和右子树都是二叉搜索树
>
> 
>
>**示例 1：**
>
>![img](https://assets.leetcode.com/uploads/2021/03/11/mode-tree.jpg)
>
>```
>输入：root = [1,null,2,2]
>输出：[2]
>```
>
>**示例 2：**
>
>```
>输入：root = [0]
>输出：[0]
>```
>
> 
>
>**提示：**
>
>- 树中节点的数目在范围 `[1, 104]` 内
>- `-105 <= Node.val <= 105`

###### 501.1.解题思路

>基于二叉搜索树中序遍历的性质：一棵二叉搜索树的中序遍历序列是一个非递减的有序序列。
>
>顺序扫描中序遍历序列，用 base 记录当前的数字，用 count 记录当前数字重复的次数，用 maxCount 来维护已经扫描过的数当中出现最多的那个数字的出现次数，用 ans 数组记录出现的众数。每次扫描到一个新的元素：
>
>* 首先更新 base 和 count:
>  * 如果该元素和 base 相等，那么 count 自增 1；
>    否则将 base 更新为当前数字，count 复位为 1。
>* 然后更新 maxCount：
>  * 如果 count=maxCount，那么说明当前的这个数字（base）出现的次数等于当前众数出现的次数，将 base加入 ans 数组；
>    如果 count>maxCount，那么说明当前的这个数字（base）出现的次数大于当前众数出现的次数，因此，我们需要将 maxCount 更新为 count，清空 ans 数组后将 base 加入 ans 数组。

###### 501.2.AC代码-Java版本

```java
class Solution {
    List<Integer> array = new ArrayList<>();
    int base, count, maxCount;

    public int[] findMode(TreeNode root) {
        modeDfs(root);
        
        int[] ans = new int[array.size()];
        for (int i = 0; i < array.size(); i++) {
            ans[i] = array.get(i);
        }
        
        return ans;

    }
    
    public void modeDfs(TreeNode node){
        if(node == null){
            return;
        }
        modeDfs(node.left);
        if(node.val == base){
            count++;
        }else {
            count = 1;
            base = node.val;
        }
        
        if(count == maxCount){
            array.add(node.val);
        }
        
        if(count > maxCount){
            maxCount = count;
            array.clear();
            array.add(node.val);
        }
        modeDfs(node.right);
    }
}
```



#### 236. 二叉树的最近公共祖先

>给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
>
>[百度百科](https://baike.baidu.com/item/最近公共祖先/8918834?fr=aladdin)中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（**一个节点也可以是它自己的祖先**）。”
>
> 
>
>**示例 1：**
>
>![img](https://assets.leetcode.com/uploads/2018/12/14/binarytree.png)
>
>```
>输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
>输出：3
>解释：节点 5 和节点 1 的最近公共祖先是节点 3 。
>```
>
>**示例 2：**
>
>![img](https://assets.leetcode.com/uploads/2018/12/14/binarytree.png)
>
>```
>输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
>输出：5
>解释：节点 5 和节点 4 的最近公共祖先是节点 5 。因为根据定义最近公共祖先节点可以为节点本身。
>```
>
>**示例 3：**
>
>```
>输入：root = [1,2], p = 1, q = 2
>输出：1
>```
>
> 
>
>**提示：**
>
>- 树中节点数目在范围 `[2, 105]` 内。
>- `-109 <= Node.val <= 109`
>- 所有 `Node.val` `互不相同` 。
>- `p != q`
>- `p` 和 `q` 均存在于给定的二叉树中。

###### 236.1.解题思路

>1. 当 left 和 right 同时为空;说明 root 的左/右子树中都不包含 p,q，返回 null;
>2. 当 left 和 right 同时不为空;说明 p,q 分列在 root 的 异侧 （分别在 左/右子树），因此 root 为最近公共祖先，返回 root;
>3. 当 left 为空 ，right 不为空;p,q 都不在 root 的左子树中，直接返回 right 。具体可分为两种情况:
>     p,q 其中一个在 root 的 右子树 中，此时 right 指向 p（假设为 p ）;
>     p,q 两节点都在 root 的 右子树 中，此时 right 指向最近公共祖先节点;
>4. 当 left 不为空 ， right 为空;情况 3 同理;

###### 236.2.AC代码-Java版本

```java
class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null || root == p || root == q) {
            return root;
        }

        TreeNode left = lowestCommonAncestor(root.left, p, q);
        TreeNode right = lowestCommonAncestor(root.right, p, q);
        if (left == null && right == null) {
            return null;
        }
        if (left == null) {
            return right;
        }
        if (right == null) {
            return left;
        }

        return root;
    }
}
```

