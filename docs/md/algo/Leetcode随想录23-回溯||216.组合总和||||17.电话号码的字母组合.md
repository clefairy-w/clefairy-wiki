- [x] [216. 组合总和 III](https://leetcode.cn/problems/combination-sum-iii/)
- [x] [17. 电话号码的字母组合](https://leetcode.cn/problems/letter-combinations-of-a-phone-number/)

----

#### 216.组合总和 III

>找出所有相加之和为 n 的 k 个数的组合，且满足下列条件：
>
>只使用数字1到9
>每个数字 最多使用一次 
>返回 所有可能的有效组合的列表 。该列表不能包含相同的组合两次，组合可以以任何顺序返回。



```java
class Solution {
    public List<List<Integer>> combinationSum3(int k, int n) {
        List<List<Integer>> ans = new ArrayList<>();
        if(n > 45){
            return ans;
        }
        
        Deque<Integer> path = new LinkedList<>();
        dfsSum(n, k ,1, path, ans);
        return ans;

    }
    
    public void dfsSum(int targetSum, int k, int index,Deque<Integer> path, List<List<Integer>> ans){
        if(path.size() == k){
            int sum = 0;
            for (Integer integer : path) {
                sum += integer;
            }
            if(sum == targetSum){
                ans.add(new ArrayList<>(path));
            }
            return;
        }
        
        for (int i = index; i <= 9-(k-path.size()) + 1; i++){
            path.addLast(i);
            dfsSum(targetSum, k, i+1, path, ans);
            path.removeLast();
        }
    }
}
```

```java
class Solution {

    List<List<Integer>> list = new ArrayList<>();
    List<Integer> subList = new ArrayList<>();
    int[] nums = new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9};

    public List<List<Integer>> combinationSum3(int k, int n) {
        backtrack(k, n, 0);
        return list;
    }

    public void backtrack(int k, int n, int begin) {
        if (n == 0 && k == 0) {
            list.add(new ArrayList(subList));
            return;
        }
        if (k == 0) {
            return;
        }

        for (int i = begin; i < 9; i++) {
            subList.add(nums[i]);
            backtrack(k - 1, n - nums[i], i + 1);
            subList.remove(subList.size() - 1);
        }
    }
}
```



#### 17.电话号码的字母组合

>给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
>
>给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
>
>**提示：**
>
>- `0 <= digits.length <= 4`
>- `digits[i]` 是范围 `['2', '9']` 的一个数字。
>
>示例 1：
>
>输入：digits = "23"
>输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
>示例 2：
>
>输入：digits = ""
>输出：[]
>示例 3：
>
>输入：digits = "2"
>输出：["a","b","c"]
>

```java
class Solution {
    Map<Character, String> phoneMap = new HashMap<Character, String>() {{
        put('2', "abc");
        put('3', "def");
        put('4', "ghi");
        put('5', "jkl");
        put('6', "mno");
        put('7', "pqrs");
        put('8', "tuv");
        put('9', "wxyz");
    }};
    List<String> combinations = new ArrayList<String>();

    public List<String> letterCombinations(String digits) {
        if (digits.length() == 0) {
            return combinations;
        }

        backtrack(digits, 0, new StringBuffer());
        return combinations;
    }

    public void backtrack(String digits, int index, StringBuffer combination) {
        if (digits.length() == index) {
            combinations.add(combination.toString());
            return;
        }

        char digit = digits.charAt(index);
        String letters = phoneMap.get(digit);
        for (int i = 0; i < letters.length(); i++) {
            combination.append(letters.charAt(i));
            backtrack(digits, index + 1, combination);
            combination.deleteCharAt(index);
        }
    }
}
```

