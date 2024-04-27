-  [139.单词拆分](https://leetcode.cn/problems/word-break/)

----

#### 139.单词拆分

>给你一个字符串 `s` 和一个字符串列表 `wordDict` 作为字典。请你判断是否可以利用字典中出现的单词拼接出 `s` 。
>
>**注意：**不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。

**AC代码**

```java
class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        int len = s.length();
      	HashSet<String> wordDictSet = new HashSet<>(wordDict);
      
        boolean[] dp = new boolean[len + 1];
        dp[0] = true;
        
        for (int j = 1; j <= len; j++) {
            for (int i = 0; i < j; i++) {
                if (dp[i] && wordDictSet.contains(s.substring(i, j))) {
                    dp[j] = true;
                    break;
                }
            }
        }

        return dp[len];
    }
}
```

