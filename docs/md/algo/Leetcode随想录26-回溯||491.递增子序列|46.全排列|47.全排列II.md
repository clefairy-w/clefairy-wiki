-  [491. 非递减子序列](https://leetcode.cn/problems/non-decreasing-subsequences/)
-  [46. 全排列](https://leetcode.cn/problems/permutations/)
-  [47. 全排列 II](https://leetcode.cn/problems/permutations-ii/)

-----

#### 491.非递减子序列

>给你一个整数数组 `nums` ，找出并返回所有该数组中不同的递增子序列，递增子序列中 **至少有两个元素** 。你可以按 **任意顺序** 返回答案。
>
>数组中可能含有重复元素，如出现两个整数相等，也可以视作递增序列的一种特殊情况。
>
> 
>
>**示例 1：**
>
>```
>输入：nums = [4,6,7,7]
>输出：[[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
>```
>
>**示例 2：**
>
>```
>输入：nums = [4,4,3,2,1]
>输出：[[4,4]]
>```
>
> 
>
>**提示：**
>
>- `1 <= nums.length <= 15`
>- `-100 <= nums[i] <= 100`

```java
class Solution {
    private List<Integer> path = new ArrayList<>();
    private List<List<Integer>> res = new ArrayList<>();
    public List<List<Integer>> findSubsequences(int[] nums) {
        backtracking(nums,0);
        return res;
    }

    private void backtracking (int[] nums, int start) {
        if (path.size() > 1) {
            res.add(new ArrayList<>(path));
        }

        int[] used = new int[201];
        for (int i = start; i < nums.length; i++) {
            if (!path.isEmpty() && nums[i] < path.get(path.size() - 1) ||
                    (used[nums[i] + 100] == 1)){
              continue;
            } 
            used[nums[i] + 100] = 1;
            path.add(nums[i]);
            backtracking(nums, i + 1);
            path.remove(path.size() - 1);
        }
    }
}
```



#### 46. 全排列

>给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
>
> 
>
>示例 1：
>
>输入：nums = [1,2,3]
>输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
>示例 2：
>
>输入：nums = [0,1]
>输出：[[0,1],[1,0]]
>示例 3：
>
>输入：nums = [1]
>输出：[[1]]
>
>
>提示：
>
>1 <= nums.length <= 6
>-10 <= nums[i] <= 10
>nums 中的所有整数 互不相同

```java
class Solution {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> ans = new ArrayList<>();
        boolean[] used = new boolean[nums.length];
        Deque<Integer> path = new LinkedList<>();
        permuteDFS(nums, 0, path, ans, used);
        return ans;
    }

    public void permuteDFS(int[] nums, int index, Deque<Integer> path, List<List<Integer>> ans, boolean[] used) {
        if (path.size() == nums.length) {
            ans.add(new ArrayList<>(path));
            return;
        }

        for (int i = 0; i < nums.length; i++) {
            if (!used[i]) {
                path.addLast(nums[i]);
                used[i] = true;
                permuteDFS(nums, i + 1, path, ans, used);
                path.removeLast();
                used[i] = false;
            }
        }
    }
}
```



#### 47. 全排列 II

>给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
>
> 
>
>示例 1：
>
>输入：nums = [1,1,2]
>输出：
>[[1,1,2],
> [1,2,1],
> [2,1,1]]
>示例 2：
>
>输入：nums = [1,2,3]
>输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
>
>
>提示：
>
>1 <= nums.length <= 8
>-10 <= nums[i] <= 10

```java
class Solution {
    public List<List<Integer>> permuteUnique(int[] nums) {
        int n = nums.length;

        List<List<Integer>> res = new ArrayList<>();
        boolean[] used = new boolean[n];
        List<Integer> path = new ArrayList<>();

        Arrays.sort(nums);
        backtrack(res, path, nums, used);
        return res;
    }

    public void backtrack(List<List<Integer>> res, List<Integer> path, int[] nums, boolean[] used) {
        if (path.size() == nums.length) {
            res.add(new ArrayList<>(path));
            return;
        }

        for (int i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) {
                continue;
            }
            if (!used[i]) {
                path.add(nums[i]);
                used[i] = true;
                backtrack(res, path, nums, used);
                path.remove(path.size() - 1);
                used[i] = false;

            }
        }
    }
}
```

