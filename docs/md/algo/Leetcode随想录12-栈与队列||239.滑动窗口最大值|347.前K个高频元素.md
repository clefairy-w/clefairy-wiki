- [x] [239. 滑动窗口最大值](https://leetcode.cn/problems/sliding-window-maximum/)

- [x] [347. 前 K 个高频元素](https://leetcode.cn/problems/top-k-frequent-elements/)

----

#### 239.滑动窗口最大值

>给你一个整数数组 `nums`，有一个大小为 `k` 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 `k` 个数字。滑动窗口每次只向右移动一位。
>
>返回 *滑动窗口中的最大值* 。
>
>**示例 1：**
>
>```
>输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
>输出：[3,3,5,5,6,7]
>解释：
>滑动窗口的位置                最大值
>---------------               -----
>[1  3  -1] -3  5  3  6  7       3
> 1 [3  -1  -3] 5  3  6  7       3
> 1  3 [-1  -3  5] 3  6  7       5
> 1  3  -1 [-3  5  3] 6  7       5
> 1  3  -1  -3 [5  3  6] 7       6
> 1  3  -1  -3  5 [3  6  7]      7
>```
>
>**示例 2：**
>
>```
>输入：nums = [1], k = 1
>输出：[1]
>```
>
>**提示：**
>
>- `1 <= nums.length <= 105`
>- `-104 <= nums[i] <= 104`
>- `1 <= k <= nums.length`

###### 239.1.解题思路

>* 设窗口区间为 [i,j] ，最大值为 x 。当窗口向前移动一格，则区间变为 [i+1,j+1] ，即添加了 nums[j+1]，删除了 nums[i]。
>* nums[i]可能是窗口内的唯一最大值
>* 初始化双端队列deque
>* 若队首元素正好是被删除的元素，则队首元素出队
>* 滑动窗口时，保持deque递减
>* 将新元素添加至deque尾部
>* 已形成窗口，将窗口最大值添加至列表res

###### 239.2.AC代码-Java版本

```java
class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        Deque<Integer> deque = new LinkedList<>();
        int[] res = new int[nums.length - k + 1];

        for (int i = 0; i < nu m
            ; i++) {
            while (!deque.isEmpty() && deque.peekLast() < nums[i]) {
                deque.removeLast();
            }
            deque.addLast(nums[i]);
        }

        res[0] = deque.peekFirst();
        for (int i = k; i < nums.length; i++) {
            if (deque.peekFirst() == nums[i - k]) {
                deque.removeFirst();
            }
            while (!deque.isEmpty() && deque.peekLast() < nums[i]) {
                deque.removeLast();
            }
            deque.addLast(nums[i]);
            res[i - k + 1] = deque.peekFirst();
        }

        return res;
    }
}
```



#### 347.前K个高频元素

>给你一个整数数组 `nums` 和一个整数 `k` ，请你返回其中出现频率前 `k` 高的元素。你可以按 **任意顺序** 返回答案。
>
>**示例 1:**
>
>```
>输入: nums = [1,1,1,2,2,3], k = 2
>输出: [1,2]
>```
>
>**示例 2:**
>
>```
>输入: nums = [1], k = 1
>输出: [1]
>```
>
>**提示：**
>
>- `1 <= nums.length <= 105`
>- `k` 的取值范围是 `[1, 数组中不相同的元素的个数]`
>- 题目数据保证答案唯一，换句话说，数组中前 `k` 个高频元素的集合是唯一的
>
>**进阶：**你所设计算法的时间复杂度 **必须** 优于 `O(n log n)` ，其中 `n` 是数组大小。

###### 347.1.解题思路

>* 统计数组中各元素出现的次数
>* 使用堆进行排序，根据出现的频次进行排序

###### 347.AC代码-Java版本

```java
class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> occurrences = new HashMap<>();
        for (int num : nums) {
            occurrences.put(num, occurrences.getOrDefault(num, 0) + 1);
        }

        // int[] 第一个元素代表数组的值，第二个元素代表该值出现的次数
        PriorityQueue<int[]> queue = new PriorityQueue<>(new Comparator<int[]>() {
            @Override
            public int compare(int[] o1, int[] o2) {
                return o1[1] - o2[1];
            }
        });

        for (Map.Entry<Integer, Integer> entry : occurrences.entrySet()) {
            int num = entry.getKey(), count = entry.getValue();
            if (queue.size() == k) {
                assert queue.peek() != null;
                if (queue.peek()[1] < count) {
                    queue.poll();
                    queue.offer(new int[]{num, count});
                }
            } else {
                queue.offer(new int[]{num, count});
            }
        }

        int[] res = new int[k];
        for (int i = 0; i < k; i++) {
            res[i] = Objects.requireNonNull(queue.poll())[0];
        }

        return res;
    }
}
```