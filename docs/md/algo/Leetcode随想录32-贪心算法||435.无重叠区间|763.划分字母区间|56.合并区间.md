- [ ] [435. 无重叠区间](https://leetcode.cn/problems/non-overlapping-intervals/)
- [ ] [763. 划分字母区间](https://leetcode.cn/problems/partition-labels/)
- [ ] [56. 合并区间](https://leetcode.cn/problems/merge-intervals/)

----

#### 435.无重叠区间

>给定一个区间的集合 `intervals` ，其中 `intervals[i] = [starti, endi]` 。返回 *需要移除区间的最小数量，使剩余区间互不重叠* 。
>
>**示例 1:**
>
>```
>输入: intervals = [[1,2],[2,3],[3,4],[1,3]]
>输出: 1
>解释: 移除 [1,3] 后，剩下的区间没有重叠。
>```
>
>**示例 2:**
>
>```
>输入: intervals = [ [1,2], [1,2], [1,2] ]
>输出: 2
>解释: 你需要移除两个 [1,2] 来使剩下的区间没有重叠。
>```
>
>**示例 3:**
>
>```
>输入: intervals = [ [1,2], [2,3] ]
>输出: 0
>解释: 你不需要移除任何区间，因为它们已经是无重叠的了。
>```
>
>**提示:**
>
>- `1 <= intervals.length <= 105`
>- `intervals[i].length == 2`
>- `-5 * 104 <= starti < endi <= 5 * 104`

**AC代码**

```java
class Solution {
    public int eraseOverlapIntervals(int[][] intervals) {
        Arrays.sort(intervals, (a, b) -> {
            if (a[0] == b[0]) {
                return a[1] - b[1];
            } else {
                return a[0] - b[0];
            }
        });

        int n = intervals.length;
        int removedCount = 0;
        int preEnd = intervals[0][1];
        for (int i = 1; i < n; i++) {
            if (intervals[i][0] >= preEnd) {
                preEnd = intervals[i][1];
            } else {
                removedCount++;
                preEnd = Math.min(preEnd, intervals[i][1]);
            }
        }
        return removedCount;
    }
}
```



#### 763.划分字母区间

>给你一个字符串 `s` 。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。
>
>注意，划分结果需要满足：将所有划分结果按顺序连接，得到的字符串仍然是 `s` 。
>
>返回一个表示每个字符串片段的长度的列表。
>
> **示例 1：**
>
>```
>输入：s = "ababcbacadefegdehijhklij"
>输出：[9,7,8]
>解释：
>划分结果为 "ababcbaca"、"defegde"、"hijhklij" 。
>每个字母最多出现在一个片段中。
>像 "ababcbacadefegde", "hijhklij" 这样的划分是错误的，因为划分的片段数较少。 
>```
>
>**示例 2：**
>
>```
>输入：s = "eccbbbbdec"
>输出：[10]
>```

**AC代码**

```java
class Solution {
    public List<Integer> partitionLabels(String s) {
        List<Integer> ans = new ArrayList<>();
        int n = s.length();
        int startIndex = 0;
        int lastIndex = s.lastIndexOf(s.charAt(0));
        for (int i = 1; i < n; ) {
            int j = i;
            for (; j <= lastIndex; j++) {
                if (s.lastIndexOf(s.charAt(j)) > lastIndex) {
                    lastIndex = s.lastIndexOf(s.charAt(j));
                }
            }
            i = j;
            ans.add(lastIndex - startIndex + 1);
            if ((lastIndex + 1) < n) {
                startIndex = lastIndex + 1;
                lastIndex = s.lastIndexOf(s.charAt(startIndex));
            }
        }
        return ans;
    }
}
```

```java
class Solution {
    public List<Integer> partitionLabels(String s) {
        List<Integer> ans = new ArrayList<>();
        int n = s.length();
        int[] last = new int[26];
        for (int i = 0; i < n; i++) {
            last[s.charAt(i) - 'a'] = i;
        }

        int start = 0, end = 0;
        for (int i = 0; i < n; i++) {
            end = Math.max(end, last[s.charAt(i) - 'a']);
            if (i == end) {
                ans.add(end - start + 1);
                start = end + 1;
            }
        }

        return ans;
    }
}
```



#### 56.合并区间

>以数组 `intervals` 表示若干个区间的集合，其中单个区间为 `intervals[i] = [starti, endi]` 。请你合并所有重叠的区间，并返回 *一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间* 。
>
>**示例 1：**
>
>```
>输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
>输出：[[1,6],[8,10],[15,18]]
>解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
>```
>
>**示例 2：**
>
>```
>输入：intervals = [[1,4],[4,5]]
>输出：[[1,5]]
>解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
>```
>
>**提示：**
>
>- `1 <= intervals.length <= 104`
>- `intervals[i].length == 2`
>- `0 <= starti <= endi <= 104`

**AC代码**

```java
class Solution {
    public int[][] merge(int[][] intervals) {
        Arrays.sort(intervals, (a, b) -> {
            if (a[0] == b[0]) {
                return a[1] - b[1];
            } else {
                return a[0] - b[0];
            }
        });
        List<int[]> merged = new ArrayList<>();
        int n = intervals.length;
        for (int i = 0; i < n; i++) {
            int left = intervals[i][0], right = intervals[i][1];
            if (merged.size() == 0 || merged.get(merged.size() - 1)[1] < left) {
                merged.add(new int[]{left, right});
            } else {
                merged.get(merged.size() - 1)[1] = Math.max(right, merged.get(merged.size() - 1)[1]);
            }
        }

        return merged.toArray(new int[merged.size()][2]);
    }
}
```

