- [x] [77. 组合](https://leetcode.cn/problems/combinations/)

----

>1.**回溯的本质是穷举，穷举所有可能，然后选出我们想要的答案，所以回溯法并不是什么高效的算法。**
>
>2.**回溯是递归的副产品，只要有递归就会有回溯**
>
>3.回溯法，一般可以解决如下几种问题：
>
>- 组合问题：N个数里面按一定规则找出k个数的集合
>- 切割问题：一个字符串按一定规则有几种切割方式
>- 子集问题：一个N个数的集合里有多少符合条件的子集
>- 排列问题：N个数按一定规则全排列，有几种排列方式
>- 棋盘问题：N皇后，解数独等等
>
>4.**组合是不强调元素顺序的，排列是强调元素顺序**。

----

#### 77. 组合

>给定两个整数 `n` 和 `k`，返回范围 `[1, n]` 中所有可能的 `k` 个数的组合。
>
>你可以按 **任何顺序** 返回答案。
>
>**示例 1：**
>
>输入：n = 4, k = 2
>输出：
>[
>[2,4],
>[3,4],
>[2,3],
>[1,2],
>[1,3],
>[1,4],
>]
>
>**示例 2：**
>
>```
>输入：n = 1, k = 1
>输出：[[1]]
>```
>
>**提示：**
>
>- `1 <= n <= 20`
>- `1 <= k <= n`

###### 77.1.AC代码-Java代码

```java
class Solution {
    public List<List<Integer>> combine(int n, int k) {
        List<List<Integer>> ans = new ArrayList<>();
        if (k <= 0 || n < k) {
            return ans;
        }

        Deque<Integer> path = new ArrayDeque<>();
        dfs(n, k, 1, path, ans);

        return ans;


    }

    public void dfs(int n, int k, int index, Deque<Integer> path, List<List<Integer>> ans) {
        if (path.size() == k) {
            ans.add(new ArrayList<>(path));
            return;
        }
        for (int i = index; i <= n - (k - path.size()) + 1; i++) {
            path.addLast(i);
            dfs(n, k, i + 1, path, ans);
            path.removeLast();
        }
    }
}
```

