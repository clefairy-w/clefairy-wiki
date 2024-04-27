-  [24. 两两交换链表中的节点](https://leetcode.cn/problems/swap-nodes-in-pairs/)
-  [19. 删除链表的倒数第 N 个结点](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/)
-  [面试题 02.07. 链表相交](https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/)
-  [142. 环形链表 II](https://leetcode.cn/problems/linked-list-cycle-ii/)

----

#### 24.两两交换链表中的节点

>给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
>
>**示例 1：**
>
>![img](https://assets.leetcode.com/uploads/2020/10/03/swap_ex1.jpg)
>
>```
>输入：head = [1,2,3,4]
>输出：[2,1,4,3]
>```
>
>**示例 2：**
>
>```
>输入：head = []
>输出：[]
>```
>
>**示例 3：**
>
>```
>输入：head = [1]
>输出：[1]
>```
>
>**提示：**
>
>- 链表中节点的数目在范围 `[0, 100]` 内
>- `0 <= Node.val <= 100`

###### 24.1.信息提取

>* 两两交换

###### 24.2.解题思路

>创建哑节点dummyhead,令dummyHead.next=head。令currNode表示到达当前节点，初始currNode=dummyHead。每次交换currNode后面两个节点。如果currNode的后面没有节点或者只有一个节点，则没有更多的节点需要交换，因此交换结束。否则，获得currNode后面两个节点temp和tempNext，通过更新节点的指针关系实现两两交换节点。具体而言，交换前节点间的关系是currNode->temp-tempNext,交换后节点间的关系为currNode->tempNext->temp。

###### 24.3.AC代码-Java版本

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode swapPairs(ListNode head) {
        ListNode dummyHead = new ListNode(-1);
        dummyHead.next = head;
        ListNode currNode = dummyHead;
        while (currNode.next != null && currNode.next.next != null) {
            ListNode temp = currNode.next;
            ListNode tempNext = currNode.next.next;
            currNode.next = tempNext;
            temp.next = tempNext.next;
            tempNext.next = temp;
            currNode = temp;
        }

        return dummyHead.next;
    }
}
```



19.删除链表的倒数第N个结点

>给你一个链表，删除链表的倒数第 `n` 个结点，并且返回链表的头结点。
>
>**示例 1：**
>
>![img](https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg)
>
>```
>输入：head = [1,2,3,4,5], n = 2
>输出：[1,2,3,5]
>```
>
>**示例 2：**
>
>```
>输入：head = [1], n = 1
>输出：[]
>```
>
>**示例 3：**
>
>```
>输入：head = [1,2], n = 1
>输出：[1]
>```
>
>**提示：**
>
>- 链表中结点的数目为 `sz`
>- `1 <= sz <= 30`
>- `0 <= Node.val <= 100`
>- `1 <= n <= sz`

19.1.信息提取

>* 倒数第n个

19.2.解题思路

>* 首先从头节点开始对链表进行一次遍历，得到链表的长度 L。随后我们再从头节点开始对链表进行一次遍历，当遍历到第 `L − n + 1` 个节点时，它就是我们需要删除的节点。
>

19.3.AC代码-Java版本

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode dummy = new ListNode(0, head);
        ListNode cur = dummy;
        int len = getLength(head);
        for (int i = 0; i < len - n; i++) {
            cur = cur.next;
        }

        cur.next = cur.next.next;

        return dummy.next;
    }

    public int getLength(ListNode node) {
        int len = 0;
        while (node != null) {
            len++;
            node = node.next;
        }

        return len;
    }
}
```



#### 02.07.链表相交

>给你两个单链表的头节点 `headA` 和 `headB` ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 `null` 。
>
>图示两个链表在节点 `c1` 开始相交**：**
>
>[![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_statement.png)](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_statement.png)
>
>题目数据 **保证** 整个链式结构中不存在环。
>
>**注意**，函数返回结果后，链表必须 **保持其原始结构** 。
>
> 
>
>**示例 1：**
>
>[![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_example_1.png)](https://assets.leetcode.com/uploads/2018/12/13/160_example_1.png)
>
>```
>输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
>输出：Intersected at '8'
>解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。
>从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。
>在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
>```
>
>**示例 2：**
>
>[![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_example_2.png)](https://assets.leetcode.com/uploads/2018/12/13/160_example_2.png)
>
>```
>输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
>输出：Intersected at '2'
>解释：相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。
>从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。
>在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。
>```
>
>**示例 3：**
>
>[![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_example_3.png)](https://assets.leetcode.com/uploads/2018/12/13/160_example_3.png)
>
>```
>输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
>输出：null
>解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。
>由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
>这两个链表不相交，因此返回 null 。
>```
>
> 
>
>**提示：**
>
>- `listA` 中节点数目为 `m`
>- `listB` 中节点数目为 `n`
>- `0 <= m, n <= 3 * 104`
>- `1 <= Node.val <= 105`
>- `0 <= skipA <= m`
>- `0 <= skipB <= n`
>- 如果 `listA` 和 `listB` 没有交点，`intersectVal` 为 `0`
>- 如果 `listA` 和 `listB` 有交点，`intersectVal == listA[skipA + 1] == listB[skipB + 1]`

###### 02.07.1.信息提取

>* 两个单链表相交的起始节点

###### 02.07.2.解题思路

>* 使用双指针的方法，可以将空间复杂度降至 O(1)。
>
>* 只有当链表 headA 和 headB 都不为空时，两个链表才可能相交。因此首先判断链表 headA 和 headB 是否为空，如果其中至少有一个链表为空，则两个链表一定不相交，返回 null。
>
>* 当链表 headA 和 headB 都不为空时，创建两个指针 pA 和 pB，初始时分别指向两个链表的头节点 headA 和 headB，然后将两个指针依次遍历两个链表的每个节点。具体做法如下：
>
>  * 每步操作需要同时更新指针 pA\textit{pA}pA 和 pB\textit{pB}pB。
>
>  * 如果指针 pA 不为空，则将指针 pA 移到下一个节点；如果指针 pB 不为空，则将指针 pB 移到下一个节点。
>
>  * 如果指针 pA 为空，则将指针 pA 移到链表 headB 的头节点；如果指针 pB 为空，则将指针 pB 移到链表 headA 的头节点。
>
>  * 当指针 pA 和 pB 指向同一个节点或者都为空时，返回它们指向的节点或者 null。
>  * 上述方式相当于将两个链表按照两种方式合成长度相等的链表。

02.07.3.AC代码-Java版本

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
// 时间复杂度：O(m+n)，其中 m 和 n 是分别是链表 headA 和 headB 的长度。两个指针同时遍历两个链表，每个指针遍历两个链表各一次。
// 空间复杂度：O(1)。
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        if (headA == null || headB == null) {
            return null;
        }

        ListNode pA = headA, pB = headB;
        while (pA != pB) {
            pA = pA == null ? headB : pA.next;
            pB = pB == null ? headA : pB.next;
        }

        return pA;
    }
}
```



#### 142.环形链表II

>给定一个链表的头节点  `head` ，返回链表开始入环的第一个节点。 *如果链表无环，则返回 `null`。*
>
>如果链表中有某个节点，可以通过连续跟踪 `next` 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 `pos` 来表示链表尾连接到链表中的位置（**索引从 0 开始**）。如果 `pos` 是 `-1`，则在该链表中没有环。**注意：`pos` 不作为参数进行传递**，仅仅是为了标识链表的实际情况。
>
>**不允许修改** 链表。
>
>**示例 1：**
>
>![img](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png)
>
>```
>输入：head = [3,2,0,-4], pos = 1
>输出：返回索引为 1 的链表节点
>解释：链表中有一个环，其尾部连接到第二个节点。
>```
>
>**示例 2：**
>
>![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png)
>
>```
>输入：head = [1,2], pos = 0
>输出：返回索引为 0 的链表节点
>解释：链表中有一个环，其尾部连接到第一个节点。
>```
>
>**示例 3：**
>
>![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png)
>
>```
>输入：head = [1], pos = -1
>输出：返回 null
>解释：链表中没有环。
>```
>
>**提示：**
>
>- 链表中节点的数目范围在范围 `[0, 104]` 内
>- `-105 <= Node.val <= 105`

###### 142.1.信息提取

>* 判断链表是否有环

###### 142.2.解题思路

>第一种：哈希表-遍历链表中的每个节点，并将它记录下来；一旦遇到了此前遍历过的节点，就可以判定链表中存在环

###### 142.3.AC代码-Java版本

```java
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode detectCycle(ListNode head) {
        HashSet<ListNode> set = new HashSet<>();
        ListNode cur = head;
        while (cur != null) {
            if (set.contains(cur)) {
                return cur;
            }
            set.add(cur);
            cur = cur.next;
        }

        return null;
    }
}
```



```java
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
// 双指针，快慢，如果存在循环则快慢指针一定会相遇
public class Solution {
    public ListNode detectCycle(ListNode head) {
        ListNode fast = head, slow = head;
        while (true) {
            if (fast == null || fast.next == null) return null;
            fast = fast.next.next;
            slow = slow.next;
            if (fast == slow) break;
        }
        fast = head;
        while (slow != fast) {
            slow = slow.next;
            fast = fast.next;
        }
        return fast;
    }
}
```

