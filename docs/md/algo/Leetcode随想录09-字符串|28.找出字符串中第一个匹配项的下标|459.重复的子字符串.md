- [x] [28. 找出字符串中第一个匹配项的下标](https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/)
- [ ] [459. 重复的子字符串](https://leetcode.cn/problems/repeated-substring-pattern/)

----

#### 28.找出字符串中第一个匹配项的下标

>给你两个字符串 `haystack` 和 `needle` ，请你在 `haystack` 字符串中找出 `needle` 字符串的第一个匹配项的下标（下标从 0 开始）。如果 `needle` 不是 `haystack` 的一部分，则返回 `-1` 。
>
>**示例 1：**
>
>```
>输入：haystack = "sadbutsad", needle = "sad"
>输出：0
>解释："sad" 在下标 0 和 6 处匹配。
>第一个匹配项的下标是 0 ，所以返回 0 。
>```
>
>**示例 2：**
>
>```
>输入：haystack = "leetcode", needle = "leeto"
>输出：-1
>解释："leeto" 没有在 "leetcode" 中出现，所以返回 -1 。
>```
>
>**提示：**
>
>- `1 <= haystack.length, needle.length <= 104`
>- `haystack` 和 `needle` 仅由小写英文字符组成

###### 28.1.解题思路

###### 28.2.AC-Java版本

```java
class Solution {
    public int strStr(String haystack, String needle) {
        int n = needle.length();
        int h = haystack.length();

        if (n > h) {
            return -1;
        }

        for (int i = 0; i < h && i + n <= h; i++) {
            if (haystack.substring(i, i + n).equals(needle)) {
                return i;
            }
        }

        return -1;
    }
}
```



#### 459.重复的子字符串

>给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。
>
> 
>
>示例 1:
>
>输入: s = "abab"
>输出: true
>解释: 可由子串 "ab" 重复两次构成。
>示例 2:
>
>输入: s = "aba"
>输出: false
>示例 3:
>
>输入: s = "abcabcabcabc"
>输出: true
>解释: 可由子串 "abc" 重复四次构成。 (或子串 "abcabc" 重复两次构成。)
>
>
>提示：
>
>1 <= s.length <= 104
>s 由小写英文字母组成

###### 459.1.解题思路

###### 459.2.java版本