-  [392. 判断子序列](https://leetcode.cn/problems/is-subsequence/)
-  [115. 不同的子序列](https://leetcode.cn/problems/distinct-subsequences/)

-----

#### 392.判断子序列

>给定字符串 **s** 和 **t** ，判断 **s** 是否为 **t** 的子序列。
>
>字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，`"ace"`是`"abcde"`的一个子序列，而`"aec"`不是）。
>
>**示例 1：**
>
>```
>输入：s = "abc", t = "ahbgdc"
>输出：true
>```
>
>**示例 2：**
>
>```
>输入：s = "axc", t = "ahbgdc"
>输出：false
>```

**AC代码**

```java
class Solution {
    public boolean isSubsequence(String s, String t) {
        int m = s.length();
        int n = t.length();

        int[][] dp = new int[m + 1][n + 1];
        dp[0][0] = 0;

        for (int i = 1; i <= m; i++) {
            for (int j = i; j <= n; j++) {
                if (s.charAt(i - 1) == t.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = dp[i][j - 1];
                }
            }
        }

        return dp[m][n] == s.length();
    }
}
```



#### 115.不同的子序列

>给你两个字符串 `s` 和 `t` ，统计并返回在 `s` 的 **子序列** 中 `t` 出现的个数，结果需要对 109 + 7 取模。
>
>```
>示例 1:
>输入：s = "rabbbit", t = "rabbit"
>输出：3
>解释：
>如下所示, 有 3 种可以从 s 中得到 "rabbit" 的方案。
>rabb b it
>rab b bit
>ra b bbit
>
>示例 2：
>输入：s = "babgbag", t = "bag"
>输出：5
>解释：
>如下所示, 有 5 种可以从 s 中得到 "bag" 的方案。 
>babgbag
>babgbag
>babgbag
>babgbag
>babgbag
>```

**AC代码**

```java
class Solution {
    public int numDistinct(String s, String t) {
        int m = s.length();
        int n = t.length();

        if (m == 0 || n == 0 || m < n) {
            return 0;
        }

        int[][] dp = new int[m + 1][n + 1];

        for (int i = 0; i < m; i++) {
            dp[i][0] = 1;
        }

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (s.charAt(i - 1) == t.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
                } else {
                    dp[i][j] = dp[i - 1][j];
                }
            }
        }

        return dp[m][n];
    }
}
```

