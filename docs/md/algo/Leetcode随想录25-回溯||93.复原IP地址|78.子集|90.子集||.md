-  [93. 复原 IP 地址](https://leetcode.cn/problems/restore-ip-addresses/)
-  [78. 子集](https://leetcode.cn/problems/subsets/)
-  [90. 子集 II](https://leetcode.cn/problems/subsets-ii/)

----

#### 93.复原 IP 地址

>- **有效 IP 地址** 正好由四个整数（每个整数位于 `0` 到 `255` 之间组成，且不能含有前导 `0`），整数之间用 `'.'` 分隔。
>
>  - 例如：`"0.1.2.201"` 和` "192.168.1.1"` 是 **有效** IP 地址，但是 `"0.011.255.245"`、`"192.168.1.312"` 和 `"192.168@1.1"` 是 **无效** IP 地址。
>
>  给定一个只包含数字的字符串 `s` ，用以表示一个 IP 地址，返回所有可能的**有效 IP 地址**，这些地址可以通过在 `s` 中插入 `'.'` 来形成。你 **不能** 重新排序或删除 `s` 中的任何数字。你可以按 **任何** 顺序返回答案。
>
>  
>
>  **示例 1：**
>
>  ```
>  输入：s = "25525511135"
>  输出：["255.255.11.135","255.255.111.35"]
>  ```
>
>  **示例 2：**
>
>  ```
>  输入：s = "0000"
>  输出：["0.0.0.0"]
>  ```
>
>  **示例 3：**
>
>  ```
>  输入：s = "101023"
>  输出：["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"] 
>  ```
>
>  **提示：**
>
>  - `1 <= s.length <= 20`
>  - `s` 仅由数字组成

**AC代码**

```java
class Solution {
    List<String> res = new ArrayList<>();
    Deque<String> segments = new LinkedList<>();

    public List<String> restoreIpAddresses(String s) {
        int n = s.length();
        if (n < 4 || n > 12) {
            return res;
        }
        backtrack(s, 0, 0);
        return res;
    }

    public void backtrack(String s, int index, int pointNum) {
        if(pointNum > 3){
            return;
        }
        if (pointNum == 3 && isValid(s, index, s.length() - 1)) {
            segments.addLast(s.substring(index));
            res.add(String.join(".", segments));
            segments.removeLast();
            return;

        }

        for (int i = index; i < s.length(); i++) {
            if (s.length() - i > 12 - pointNum * 3) {
                continue;
            }
            if (isValid(s, index, i)) {
                segments.addLast(s.substring(index, i + 1));
                pointNum++;
                backtrack(s, i + 1, pointNum);
                pointNum--;
                segments.removeLast();
            }
        }
    }

    public boolean isValid(String s, int start, int end) {
        if (start > end) {
            return false;
        }

        if (s.charAt(start) == '0' && start != end) {
            return false;
        }

        for (int i = start; i <= end; i++) {
            if (s.charAt(i) > '9' || s.charAt(i) < '0') {
                return false;
            }
            if (Integer.parseInt(s.substring(start, i + 1)) > 255) {
                return false;
            }
        }

        return true;
    }
}
```



#### 78. 子集

>给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
>
>解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
>
> 
>
>示例 1：
>
>输入：nums = [1,2,3]
>输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
>示例 2：
>
>输入：nums = [0]
>输出：[[],[0]]
>
>
>提示：
>
>1 <= nums.length <= 10
>-10 <= nums[i] <= 10
>nums 中的所有元素 互不相同

```java
class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> ans = new ArrayList<>();

        Deque<Integer> path = new LinkedList<>();
        subsetsDFS(nums, 0, path, ans);
        return ans;

    }

    public void subsetsDFS(int[] nums, int index, Deque<Integer> path, List<List<Integer>> ans){

        ans.add(new ArrayList<>(path));
        for (int i = index; i< nums.length;i++){
            path.addLast(nums[i]);
            subsetsDFS(nums, i+1, path, ans);
            path.removeLast();
        }
    }
}
```



#### 90.子集 II

>给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
>
>解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。
>
> 
>
>示例 1：
>
>输入：nums = [1,2,2]
>输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
>示例 2：
>
>输入：nums = [0]
>输出：[[],[0]]
>
>
>提示：
>
>1 <= nums.length <= 10
>-10 <= nums[i] <= 10

```java
class Solution {
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> ans = new ArrayList<>();

        Deque<Integer> path = new LinkedList<>();
        boolean[] used = new boolean[nums.length];

        subsetsWithDupDFS(nums, 0, path, ans, used);
        return ans;
    }

    public void subsetsWithDupDFS(int[] nums, int index, Deque<Integer> path, List<List<Integer>> ans, boolean[] used) {
        ans.add(new ArrayList<>(path));
        for (int i = index; i < nums.length; i++) {
            if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) {
                continue;
            }

            path.addLast(nums[i]);
            used[i] = true;
            subsetsWithDupDFS(nums, i + 1, path, ans, used);
            path.removeLast();
            used[i] = false;
        }
    }
}
```

