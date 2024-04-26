- [x] [496. 下一个更大元素 I](https://leetcode.cn/problems/next-greater-element-i/)
- [x] [503. 下一个更大元素 II](https://leetcode.cn/problems/next-greater-element-ii/)
- [x] [2487. 从链表中移除节点](https://leetcode.cn/problems/remove-nodes-from-linked-list/)

----

#### 496.下一个更大元素I

>- 本题寻找大于当前元素的下一个元素
>- 两个数组元素都是不重复的

**AC代码**

```java
class Solution {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        int[] ans = new int[nums1.length];
        Arrays.fill(ans, -1);

        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums1.length; i++) {
            map.put(nums1[i], i);
        }
      
        Deque<Integer> stack = new LinkedList<>();
      
        for (int i = 0; i < nums2.length; i++) {
            while (!stack.isEmpty() 
                   && map.containsKey(nums2[stack.peek()]) 
                   && nums2[i] > nums2[stack.peek()]) {
                ans[map.get(nums2[stack.peek()])] = nums2[i];
                stack.pop();
            }
            stack.push(i);
        }

        return ans;
    }
}
```



#### 503.下一个更大的元素II

>* 本题寻找大于当前元素的下一个元素
>
>- 注意元素的可以循环的，即循环数组 `nums` （ `nums[nums.length - 1]` 的下一个元素是 `nums[0]` ）

**AC代码**

```java
class Solution {
    public int[] nextGreaterElements(int[] nums) {
        int len = nums.length;
        int[] ans = new int[len];
        Arrays.fill(ans, -1);
      
        Deque<Integer> stack = new LinkedList<>();

        for (int i = 0; i < 2 * len; i++) {
            while (!stack.isEmpty() && nums[i % len] > nums[stack.peek()]) {
                int index = stack.peek();
                ans[index] = nums[i % len];
                stack.pop();
            }
            stack.push(i % len);
        }

        return ans;
    }
}
```



#### 2487.从链表中移除节点

>给你一个链表的头节点 `head` 。
>
>移除每个右侧有一个更大数值的节点。
>
>返回修改后链表的头节点 `head` 。
>
>**示例 1：**
>
>![img](https://assets.leetcode.com/uploads/2022/10/02/drawio.png)
>
>```
>输入：head = [5,2,13,3,8]
>输出：[13,8]
>解释：需要移除的节点是 5 ，2 和 3 。
>- 节点 13 在节点 5 右侧。
>- 节点 13 在节点 2 右侧。
>- 节点 8 在节点 3 右侧。
>```
>
>**示例 2：**
>
>```
>输入：head = [1,1,1,1]
>输出：[1,1,1,1]
>解释：每个节点的值都是 1 ，所以没有需要移除的节点。
>```
>
>**提示：**
>
>- 给定列表中的节点数目在范围 `[1, 105]` 内
>- `1 <= Node.val <= 105`

**AC代码**

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
    public ListNode removeNodes(ListNode head) {
        Deque<ListNode> stack = new LinkedList<>();
        for (; head != null; head = head.next) {
            stack.push(head);
        }

        while (!stack.isEmpty()) {
            if (head == null || stack.peek().val >= head.val) {
                stack.peek().next = head;
                head = stack.peek();
            }
            stack.pop();
        }
        
        return head;
    }
}
```

