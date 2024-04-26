- [ ] [39. 组合总和](https://leetcode.cn/problems/combination-sum/)
- [ ] [40. 组合总和 II](https://leetcode.cn/problems/combination-sum-ii/)
- [ ] [131. 分割回文串](https://leetcode.cn/problems/palindrome-partitioning/)

----

#### 39. 组合总和

>给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。
>
>candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。 
>
>对于给定的输入，保证和为 target 的不同组合数少于 150 个。
>
> **示例 1：**
>
>输入：candidates = [2,3,6,7], target = 7
>输出：[[2,2,3],[7]]
>解释：
>2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。
>7 也是一个候选， 7 = 7 。
>仅有这两种组合。
>
>**示例 2：**
>
>输入: candidates = [2,3,5], target = 8
>输出: [[2,2,2,2],[2,3,3],[3,5]]
>
>**示例 3：**
>
>输入: candidates = [2], target = 1
>输出: []
>
>**提示：**
>
>1 <= candidates.length <= 30
>2 <= candidates[i] <= 40
>candidates 的所有元素 互不相同
>1 <= target <= 40



```java
class Solution {
    List<List<Integer>> res = new ArrayList<>();

    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        int n = candidates.length;
        if (n == 0) {
            return res;
        }

        Arrays.sort(candidates);
        if (target < candidates[0]) {
            return res;
        }

        Deque<Integer> path = new LinkedList<>();
        backtrack(candidates, 0, path, target);
        return res;
    }

    public void backtrack(int[] candidates, int index, Deque<Integer> path, int target) {
        if (target == 0) {
            res.add(new ArrayList<>(path));
            return;
        }

        for (int i = index; i < candidates.length; i++) {
            if (target - candidates[i] < 0) {
                break;
            }
            path.addLast(candidates[i]);
            backtrack(candidates, i, path, target - candidates[i]);
            path.removeLast();
        }
    }
}
```



#### 40. 组合总和 II

>给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
>
>candidates 中的每个数字在每个组合中只能使用 一次 。
>
>注意：解集不能包含重复的组合。 
>
> 
>
>示例 1:
>
>输入: candidates = [10,1,2,7,6,1,5], target = 8,
>输出:
>[
>[1,1,6],
>[1,2,5],
>[1,7],
>[2,6]
>]
>示例 2:
>
>输入: candidates = [2,5,2,1,2], target = 5,
>输出:
>[
>[1,2,2],
>[5]
>]
>
>
>提示:
>
>1 <= candidates.length <= 100
>1 <= candidates[i] <= 50
>1 <= target <= 30



```java
class Solution {
    List<List<Integer>> res = new ArrayList<>();

    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        int n = candidates.length;
        if (n == 0) {
            return res;
        }

        Arrays.sort(candidates);
        if (candidates[0] > target) {
            return res;
        }

        Deque<Integer> path = new LinkedList<>();
        backtrack(candidates, path, 0, target);
        return res;

    }

    public void backtrack(int[] candidates, Deque<Integer> path, int index, int target) {
        if (target == 0) {
            res.add(new ArrayList<>(path));
            return;
        }

        for (int i = index; i < candidates.length; i++) {
            if (target - candidates[i] < 0) {
                break;
            }
            if (i > index && candidates[i - 1] == candidates[i]) {
                continue;
            }
            path.addLast(candidates[i]);
            backtrack(candidates, path, i + 1, target - candidates[i]);
            path.removeLast();
        }
    }
}
```



#### 131.分割回文串

>给你一个字符串 `s`，请你将 `s` 分割成一些子串，使每个子串都是 **回文串** 。返回 `s` 所有可能的分割方案。
>
>**回文串** 是正着读和反着读都一样的字符串。
>
>**示例 1：**
>
>```
>输入：s = "aab"
>输出：[["a","a","b"],["aa","b"]]
>```
>
>**示例 2：**
>
>```
>输入：s = "a"
>输出：[["a"]]
>```
>
>**提示：**
>
>- `1 <= s.length <= 16`
>- `s` 仅由小写英文字母组成

**AC代码**

```java
class Solution {
    List<List<String>> res = new ArrayList<>();

    public List<List<String>> partition(String s) {
        if (s == null) {
            return res;
        }
        int n = s.length();
        boolean[][] dp = new boolean[n][n];
        for (int i = n - 1; i >= 0; i--) {
            for (int j = i; j < n; j++) {
                if (s.charAt(i) == s.charAt(j) && (j - i <= 1 || dp[i + 1][j - 1])) {
                    dp[i][j] = true;
                }
            }
        }
        Deque<String> path = new LinkedList<>();
        backtrack(s, path, 0, dp);
        return res;
    }

    public void backtrack(String s, Deque<String> path, int index, boolean[][] dp) {
        if (index == s.length()) {
            res.add(new ArrayList<>(path));
            return;
        }

        for (int i = index; i < s.length(); i++) {
            if (dp[index][i]) {
                path.addLast(s.substring(index, i + 1));
                backtrack(s, path, i + 1, dp);
                path.removeLast();
            }
        }
    }
}
```



#### [13. 罗马数字转整数](https://leetcode.cn/problems/roman-to-integer/)

>罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
>
>字符          数值
>I             1
>V             5
>X             10
>L             50
>C             100
>D             500
>M             1000
>例如， 罗马数字 2 写做 II ，即为两个并列的 1 。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。
>
>通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：
>
>I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
>X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
>C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
>给定一个罗马数字，将其转换成整数。
>
> 
>
>示例 1:
>
>输入: s = "III"
>输出: 3
>示例 2:
>
>输入: s = "IV"
>输出: 4
>示例 3:
>
>输入: s = "IX"
>输出: 9
>示例 4:
>
>输入: s = "LVIII"
>输出: 58
>解释: L = 50, V= 5, III = 3.
>示例 5:
>
>输入: s = "MCMXCIV"
>输出: 1994
>解释: M = 1000, CM = 900, XC = 90, IV = 4.
>
>
>提示：
>
>1 <= s.length <= 15
>s 仅含字符 ('I', 'V', 'X', 'L', 'C', 'D', 'M')
>题目数据保证 s 是一个有效的罗马数字，且表示整数在范围 [1, 3999] 内
>题目所给测试用例皆符合罗马数字书写规则，不会出现跨位等情况。
>IL 和 IM 这样的例子并不符合题目要求，49 应该写作 XLIX，999 应该写作 CMXCIX 。

```java
class Solution {
    Map<Character, Integer> romanMap = new HashMap<>() {{
        put('I', 1);
        put('V', 5);
        put('X', 10);
        put('L', 50);
        put('C', 100);
        put('D', 500);
        put('M', 1000);
    }};

    public int romanToInt(String s) {
        char[] chars = s.toCharArray();
        int ans = romanMap.getOrDefault(chars[0], 0);
        for (int i = 1; i < chars.length; i++) {
            Integer left = romanMap.getOrDefault(chars[i - 1], 0);
            Integer right = romanMap.getOrDefault(chars[i], 0);
            if (right > left) {
                ans = (ans - left) + (right - left);
            } else {
                ans += right;
            }
        }

        return ans;
    }
}
```

