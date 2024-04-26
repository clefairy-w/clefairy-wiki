- [ ] [235. 二叉搜索树的最近公共祖先](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/)
- [ ] [701. 二叉搜索树中的插入操作](https://leetcode.cn/problems/insert-into-a-binary-search-tree/)
- [ ] [450. 删除二叉搜索树中的节点](https://leetcode.cn/problems/delete-node-in-a-bst/)

----

#### 235. 二叉搜索树的最近公共祖先

>给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
>
>[百度百科](https://baike.baidu.com/item/最近公共祖先/8918834?fr=aladdin)中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（**一个节点也可以是它自己的祖先**）。”
>
>例如，给定如下二叉搜索树: root = [6,2,8,0,4,7,9,null,null,3,5]
>
>![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/binarysearchtree_improved.png)
>
> 
>
>**示例 1:**
>
>```
>输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
>输出: 6 
>解释: 节点 2 和节点 8 的最近公共祖先是 6。
>```
>
>**示例 2:**
>
>```
>输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
>输出: 2
>解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。
>```
>
> 
>
>**说明:**
>
>- 所有节点的值都是唯一的。
>- p、q 为不同节点且均存在于给定的二叉搜索树中。

###### 235.1.解题思路

>① 树为 二叉搜索树 ，② 树的所有节点的值都是 唯一 的。根据以上条件，可方便地判断 p,q 与 root 的子树关系，即：
>
>若 root.val<p.val ，则 p 在 root 右子树 中。
>若 root.val>p.val ，则 p 在 root 左子树 中。
>若 root.val=p.val ，则 p 和 root 指向同一节点 

###### 235.2.AC代码-Java版本

```java
//时间复杂度 O(N) ： 其中 N 为二叉树节点数；每循环一轮排除一层，二叉搜索树的层数最小为 log⁡N（满二叉树），最大
//为 N（退化为链表）。
//空间复杂度 O(1) ： 使用常数大小的额外空间。

class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        TreeNode ancestor= root;
        while (true){
            if(p.val < ancestor.val && q.val < ancestor.val){
                ancestor = ancestor.left;
            }else if(p.val > ancestor.val && q.val > ancestor.val){
                ancestor = ancestor.right;
            }else {
                break;
            }
        }
        return ancestor;
    }
}
```



#### 701. 二叉搜索树中的插入操作

>给定二叉搜索树（BST）的根节点 `root` 和要插入树中的值 `value` ，将值插入二叉搜索树。 返回插入后二叉搜索树的根节点。 输入数据 **保证** ，新值和原始二叉搜索树中的任意节点值都不同。
>
>**注意**，可能存在多种有效的插入方式，只要树在插入后仍保持为二叉搜索树即可。 你可以返回 **任意有效的结果** 。
>
> 
>
>**示例 1：**
>
>![img](https://assets.leetcode.com/uploads/2020/10/05/insertbst.jpg)
>
>```
>输入：root = [4,2,7,1,3], val = 5
>输出：[4,2,7,1,3,5]
>解释：另一个满足题目要求可以通过的树是：
>```
>
>**示例 2：**
>
>```
>输入：root = [40,20,60,10,30,50,70], val = 25
>输出：[40,20,60,10,30,50,70,null,null,25]
>```
>
>**示例 3：**
>
>```
>输入：root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
>输出：[4,2,7,1,3,5]
>```
>
>**提示：**
>
>- 树中的节点数将在 `[0, 104]`的范围内。
>- `-108 <= Node.val <= 108`
>- 所有值 `Node.val` 是 **独一无二** 的。
>- `-108 <= val <= 108`
>- **保证** `val` 在原始BST中不存在。

###### 701.1.解题思路

>二叉搜索树的性质：对于任意节点 root 而言，左子树（如果存在）上所有节点的值均小于 root.val，右子树（如果存在）上所有节点的值均大于 root.val，且它们都是二叉搜索树。
>
>因此，当将 val 插入到以 root 为根的子树上时，根据 val 与 root.val 的大小关系，就可以确定要将 val 插入到哪个子树中。
>
>如果该子树不为空，则问题转化成了将 val 插入到对应子树上。
>否则，在此处新建一个以 val 为值的节点，并链接到其父节点 root 上。   

###### 701.2.AC代码-Java版本

```java
class Solution {
    public TreeNode insertIntoBST(TreeNode root, int val) {
        if (root == null) {
            return new TreeNode(val);
        }

        TreeNode pos = root;
        while (pos != null) {
            if (val < pos.val) {
                if (pos.left == null) {
                    pos.left = new TreeNode(val);
                    break;
                } else {
                    pos = pos.left;
                }
            } else {
                if (pos.right == null) {
                    pos.right = new TreeNode(val);
                    break;
                } else {
                    pos = pos.right;
                }
            }
        }
        return root;
    }
}
```



#### 450. 删除二叉搜索树中的节点

>给定一个二叉搜索树的根节点 **root** 和一个值 **key**，删除二叉搜索树中的 **key** 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。
>
>一般来说，删除节点可分为两个步骤：
>
>1. 首先找到需要删除的节点；
>2. 如果找到了，删除它。
>
> 
>
>**示例 1:**
>
>![img](https://assets.leetcode.com/uploads/2020/09/04/del_node_1.jpg)
>
>```
>输入：root = [5,3,6,2,4,null,7], key = 3
>输出：[5,4,6,2,null,null,7]
>解释：给定需要删除的节点值是 3，所以我们首先找到 3 这个节点，然后删除它。
>一个正确的答案是 [5,4,6,2,null,null,7], 如下图所示。
>另一个正确答案是 [5,2,6,null,4,null,7]。
>```
>
>**示例 2:**
>
>```
>输入: root = [5,3,6,2,4,null,7], key = 0
>输出: [5,3,6,2,4,null,7]
>解释: 二叉树不包含值为 0 的节点
>```
>
>**示例 3:**
>
>```
>输入: root = [], key = 0
>输出: []
>```
>
> 
>
>**提示:**
>
>- 节点数的范围 `[0, 104]`.
>- `-105 <= Node.val <= 105`
>- 节点值唯一
>- `root` 是合法的二叉搜索树
>- `-105 <= key <= 105`

###### 450.1.解题思路

>* root 为空，代表未搜索到值为 key 的节点，返回空。
>* root.val>key，表示值为 key 的节点可能存在于 root 的左子树中，需要递归地在 root.left调用 deleteNode，并返回 root。
>* root.val<key，表示值为 key 的节点可能存在于 root 的右子树中，需要递归地在 root.right 调用 deleteNode，并返回 root。
>* root.val=key，root 即为要删除的节点。此时要做的是删除 root，并将它的子树合并成一棵子树，保持有序性，并返回根节点。根据 root 的子树情况分成以下情况讨论：
>  root 为叶子节点，没有子树。此时可以直接将它删除，即返回空。
>  root 只有左子树，没有右子树。此时可以将它的左子树作为新的子树，返回它的左子节点。
>  root 只有右子树，没有左子树。此时可以将它的右子树作为新的子树，返回它的右子节点。
>  root 有左右子树，这时可以将 root 的后继节点（比 root 大的最小节点，即它的右子树中的最小节点，记为 successor）作为新的根节点替代 root，并将 successor 从 root 的右子树中删除，使得在保持有序性的情况下合并左右子树。
>  简单证明，successor 位于 root 的右子树中，因此大于 root 的所有左子节点；successo 是 root 的右子树中的最小节点，因此小于 root 的右子树中的其他节点。以上两点保持了新子树的有序性。
>  在代码实现上，我们可以先寻找 successor，再删除它。successor 是 root 的右子树中的最小节点，可以先找到 root 的右子节点，再不停地往左子节点寻找，直到找到一个不存在左子节点的节点，这个节点即为 successor。然后递归地在 root.right 调用 deleteNode 来删除 successor。因为 successor 没有左子节点，因此这一步递归调用不会再次步入这一种情况。然后将 successor 更新为新的 root 并返回。

###### 450.2.AC代码-Java版本

```java
class Solution {
    public TreeNode deleteNode(TreeNode root, int key) {
        if (root == null) {
            return null;
        }
        if (root.val > key) {
            root.left = deleteNode(root.left, key);
            return root;
        }
        if (root.val < key) {
            root.right = deleteNode(root.right, key);
            return root;
        }
        if (root.val == key) {
            if (root.left == null && root.right == null) {
                return null;
            }
            if (root.right == null) {
                return root.left;
            }
            if (root.left == null) {
                return root.right;
            }
            TreeNode successor = root.right;
            while (successor.left != null) {
                successor = successor.left;
            }
            root.right = deleteNode(root.right, successor.val);
            successor.right = root.right;
            successor.left = root.left;
            return successor;
        }
        return root;
    }
}
```

