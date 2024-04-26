- [x] [206. 反转链表](https://leetcode.cn/problems/reverse-linked-list/)
- [x] [707. 设计链表](https://leetcode.cn/problems/design-linked-list/)
- [x] [203. 移除链表元素](https://leetcode.cn/problems/remove-linked-list-elements/)

----

#### 206.反转链表

>给你单链表的头节点 `head` ，请你反转链表，并返回反转后的链表。
>
>**示例 1：**
>
>![img](https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg)
>
>```
>输入：head = [1,2,3,4,5]
>输出：[5,4,3,2,1]
>```
>
>**示例 2：**
>
>![img](https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg)
>
>```
>输入：head = [1,2]
>输出：[2,1]
>```
>
>**示例 3：**
>
>```
>输入：head = []
>输出：[]
>```
>
>**提示：**
>
>- 链表中节点的数目范围是 `[0, 5000]`
>- `-5000 <= Node.val <= 5000`

###### 206.1.信息提取

>* 反转链表

###### 206.2.解题思路

>* 链表的操作需要找出：上一个是谁，我是谁，下一个是谁
>* 假设链表为 1→2→3→∅1,我们想要把它改成 ∅←1←2←3。在遍历链表时，将当前节点的next指针改为指向前一个节点。由于节点没有引用前一个节点，需事先存储其前一个节点。而更改引用前，需要存储后一个节点。最后返回最新的头引用。
>

###### 206.3.AC代码-Java版本

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
// 时间复杂度O(n)
// 空间复杂度O(1)
// 迭代
class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode curNode = head;
        ListNode prev = null;
        while (curNode != null) {
            ListNode next = curNode.next;
            curNode.next = prev;
            prev = curNode;
            curNode = next;
        }

        return prev;
    }
}
```



#### 707.设计链表

>你可以选择使用单链表或者双链表，设计并实现自己的链表。
>
>单链表中的节点应该具备两个属性：`val` 和 `next` 。`val` 是当前节点的值，`next` 是指向下一个节点的指针/引用。
>
>如果是双向链表，则还需要属性 `prev` 以指示链表中的上一个节点。假设链表中的所有节点下标从 **0** 开始。
>
>实现 `MyLinkedList` 类：
>
>- `MyLinkedList()` 初始化 `MyLinkedList` 对象。
>- `int get(int index)` 获取链表中下标为 `index` 的节点的值。如果下标无效，则返回 `-1` 。
>- `void addAtHead(int val)` 将一个值为 `val` 的节点插入到链表中第一个元素之前。在插入完成后，新节点会成为链表的第一个节点。
>- `void addAtTail(int val)` 将一个值为 `val` 的节点追加到链表中作为链表的最后一个元素。
>- `void addAtIndex(int index, int val)` 将一个值为 `val` 的节点插入到链表中下标为 `index` 的节点之前。如果 `index` 等于链表的长度，那么该节点会被追加到链表的末尾。如果 `index` 比长度更大，该节点将 **不会插入** 到链表中。
>- `void deleteAtIndex(int index)` 如果下标有效，则删除链表中下标为 `index` 的节点。 
>
>**示例：**
>
>```
>输入
>["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
>[[], [1], [3], [1, 2], [1], [1], [1]]
>输出
>[null, null, null, null, 2, null, 3]
>
>解释
>MyLinkedList myLinkedList = new MyLinkedList();
>myLinkedList.addAtHead(1);
>myLinkedList.addAtTail(3);
>myLinkedList.addAtIndex(1, 2);    // 链表变为 1->2->3
>myLinkedList.get(1);              // 返回 2
>myLinkedList.deleteAtIndex(1);    // 现在，链表变为 1->3
>myLinkedList.get(1);              // 返回 3
>```
>
>**提示：**
>
>- `0 <= index, val <= 1000`
>- 请不要使用内置的 LinkedList 库。
>- 调用 `get`、`addAtHead`、`addAtTail`、`addAtIndex` 和 `deleteAtIndex` 的次数不超过 `2000` 。

###### 707.1.信息提取

>- `MyLinkedList()` 初始化 `MyLinkedList` 对象。
>- `int get(int index)` 获取链表中下标为 `index` 的节点的值。如果下标无效，则返回 `-1` 。
>- `void addAtHead(int val)` 将一个值为 `val` 的节点插入到链表中第一个元素之前。在插入完成后，新节点会成为链表的第一个节点。
>- `void addAtTail(int val)` 将一个值为 `val` 的节点追加到链表中作为链表的最后一个元素。
>- `void addAtIndex(int index, int val)` 将一个值为 `val` 的节点插入到链表中下标为 `index` 的节点之前。如果 `index` 等于链表的长度，那么该节点会被追加到链表的末尾。如果 `index` 比长度更大，该节点将 **不会插入** 到链表中。
>- `void deleteAtIndex(int index)` 如果下标有效，则删除链表中下标为 `index` 的节点。 

###### 707.2.解题思路

>* 实现 addAtHead(val) 和 addAtTail(val) 时，可以借助 addAtIndex(index, val)来实现。
>

###### 707.3.AC代码-Java版本

```java
class MyLinkedList {

        int size;

        ListNode head;

        public MyLinkedList() {
            this.size = 0;
            this.head = new ListNode(0);
        }

        public int get(int index) {
            if (index >= size || index < 0) {
                return -1;
            }

            ListNode curNode = head;
            for (int i = 0; i <= index; i++) {
                curNode = curNode.next;
            }

            return curNode.val;
        }

        public void addAtHead(int val) {
            addAtIndex(0, val);
        }

        public void addAtTail(int val) {
            addAtIndex(size, val);
        }

        public void addAtIndex(int index, int val) {
            if (index > size || index < 0) {
                return;
            }
            size++;
            ListNode prev = head;
            for (int i = 0; i < index; i++) {
                prev = prev.next;
            }

            ListNode toAdd = new ListNode(val);
            toAdd.next = prev.next;
            prev.next = toAdd;
        }

        public void deleteAtIndex(int index) {
            if (index >= size || index < 0) {
                return;
            }
            size--;
            ListNode prev = head;
            for (int i = 0; i < index; i++) {
                prev = prev.next;
            }
            prev.next = prev.next.next;
        }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList obj = new MyLinkedList();
 * int param_1 = obj.get(index);
 * obj.addAtHead(val);
 * obj.addAtTail(val);
 * obj.addAtIndex(index,val);
 * obj.deleteAtIndex(index);
 */
```



#### 203.移除链表元素

>给你一个链表的头节点 `head` 和一个整数 `val` ，请你删除链表中所有满足 `Node.val == val` 的节点，并返回 **新的头节点** 。
>
>**示例 1：**
>
>![img](https://assets.leetcode.com/uploads/2021/03/06/removelinked-list.jpg)
>
>```
>输入：head = [1,2,6,3,4,5,6], val = 6
>输出：[1,2,3,4,5]
>```
>
>**示例 2：**
>
>```
>输入：head = [], val = 1
>输出：[]
>```
>
>**示例 3：**
>
>```
>输入：head = [7,7,7,7], val = 7
>输出：[]
>```
>
>**提示：**
>
>- 列表中的节点数目在范围 `[0, 104]` 内
>- `1 <= Node.val <= 50`
>- `0 <= val <= 50`

###### 203.1.信息提取

>* 请你删除链表中所有满足 `Node.val == val` 的节点

###### 203.2.解题思路

>* 也可以用迭代的方法删除链表中所有节点值等于特定值的节点。
>
>  用 curr 表示当前节点。如果 curr 的下一个节点不为空且下一个节点的节点值等于给定的 val，则需要删除下一个节点。删除下一个节点可以通过以下做法实现：`curr.next=curr.next.next`
>  如果 curr 的下一个节点的节点值不等于给定的 val，则保留下一个节点，将 curr 移动到下一个节点即可。
>
>  当 curr 的下一个节点为空时，链表遍历结束，此时所有节点值等于 val 的节点都被删除。
>
>  具体实现方面，由于链表的头节点 head 有可能需要被删除，因此创建哑节点 dummyHead，令 dummyHead.next=head，初始化 curr=dummyHead，然后遍历链表进行删除操作。最终返回 dummyHead.next 即为删除操作后的头节点
>

###### 203.3.AC代码-Java版本

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
// 时间复杂度：O(n)O(n)O(n)，其中 nnn 是链表的长度。需要遍历链表一次。
// 空间复杂度：O(1)O(1)O(1)
class Solution {
    public ListNode removeElements(ListNode head, int val) {
        ListNode dummyHead = new ListNode(0);
        dummyHead.next = head;
        ListNode curr = dummyHead;
        while (curr.next != null) {
            if (curr.next.val == val) {
                curr.next = curr.next.next;
            }else {
                curr = curr.next;
            }
        }

        return dummyHead.next;
    }
}
```

