- [x] [647. 回文子串](https://leetcode.cn/problems/palindromic-substrings/)
- [x] [516. 最长回文子序列](https://leetcode.cn/problems/longest-palindromic-subsequence/)
- [x] [5. 最长回文子串](https://leetcode.cn/problems/longest-palindromic-substring/)

-----

#### 647.回文子串

>- 给你一个字符串 `s` ，请你统计并返回这个字符串中 **回文子串** 的数目。
>
>  **回文字符串** 是正着读和倒过来读一样的字符串。
>
>  **子字符串** 是字符串中的由连续字符组成的一个序列。
>
>  具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。
>
>  **示例 1：**
>
>  ```
>  输入：s = "abc"
>  输出：3
>  解释：三个回文子串: "a", "b", "c"
>  ```
>
>  **示例 2：**
>
>  ```
>  输入：s = "aaa"
>  输出：6
>  解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
>  ```

**AC代码**

```java
class Solution {
    public int countSubstrings(String s) {
        int m = s.length();
        if (m == 0) {
            return 0;
        }

        boolean[][] dp = new boolean[m][m];
        int res = 0;

        for (int i = m - 1; i >= 0; i--) {
            for (int j = i; j < m; j++) {
                if (s.charAt(i) == s.charAt(j) && (j - i <= 1 || dp[i + 1][j - 1])) {
                    res++;
                    dp[i][j] = true;
                }
            }
        }

        return res;
    }
}
```



#### 516.最长回文子序列

>给你一个字符串 `s` ，找出其中最长的回文子序列，并返回该序列的长度。
>
>子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。
>
>**示例 1：**
>
>```
>输入：s = "bbbab"
>输出：4
>解释：一个可能的最长回文子序列为 "bbbb" 。
>```
>
>**示例 2：**
>
>```
>输入：s = "cbbd"
>输出：2
>解释：一个可能的最长回文子序列为 "bb" 。 
>```
>
>**提示：**
>
>- `1 <= s.length <= 1000`
>- `s` 仅由小写英文字母组成

**AC代码**

```java
class Solution {
    public int longestPalindromeSubseq(String s) {
        int m = s.length();
        if (m == 0) {
            return 0;
        }

        int[][] dp = new int[m][m];
        for (int i = 0; i < m; i++) {
            dp[i][i] = 1;
        }
        for (int i = m - 1; i >= 0; i--) {
            for (int j = i + 1; j < m; j++) {
                if (s.charAt(i) == s.charAt(j)) {
                    dp[i][j] = dp[i + 1][j - 1] + 2;
                } else {
                    dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
                }
            }
        }

        return dp[0][m - 1];
    }
}
```



#### 5.最长回文串

>给你一个字符串 `s`，找到 `s` 中最长的回文子串。
>
>如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。
>
>**示例 1：**
>
>```
>输入：s = "babad"
>输出："bab"
>解释："aba" 同样是符合题意的答案。
>```
>
>**示例 2：**
>
>```
>输入：s = "cbbd"
>输出："bb"
>```
>
>**提示：**
>
>- `1 <= s.length <= 1000`
>- `s` 仅由数字和英文字母组成

**AC代码**

```java
class Solution {
    public String longestPalindrome(String s) {
        int m = s.length();
        int finalLen = 0, startIndex = 0, endIndex = 0;
        boolean[][] dp = new boolean[m][m];
        
        for (int i = m - 1; i >= 0; i--) {
            for (int j = i; j < m; j++) {
                if (s.charAt(i) == s.charAt(j) && (j - i <= 1 || dp[i + 1][j - 1])) {
                    dp[i][j] = true;
                    if ((j - i) >= finalLen) {
                        finalLen = j - i + 1;
                        startIndex = i;
                        endIndex = j;

                    }
                }
            }
        }

        return s.substring(startIndex, endIndex + 1);
    }
}
```

