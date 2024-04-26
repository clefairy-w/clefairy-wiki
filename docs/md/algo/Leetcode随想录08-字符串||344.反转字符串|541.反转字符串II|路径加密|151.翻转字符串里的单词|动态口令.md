- [x] [344. 反转字符串](https://leetcode.cn/problems/reverse-string/)
- [x] [541. 反转字符串 II](https://leetcode.cn/problems/reverse-string-ii/)
- [x] [151. 反转字符串中的单词](https://leetcode.cn/problems/reverse-words-in-a-string/)
- [x] [LCR 122. 路径加密](https://leetcode.cn/problems/ti-huan-kong-ge-lcof/)
- [x] [LCR 182. 动态口令](https://leetcode.cn/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/)

----

#### 344.反转字符串

>编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。
>
>不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
>
>**提示：**
>
>- `1 <= s.length <= 105`
>- `s[i]` 都是 [ASCII](https://baike.baidu.com/item/ASCII) 码表中的可打印字符

###### 344.1.解题思路

> 双指针

###### 344.2.AC代码-Java版本

```java
class Solution {
    public void reverseString(char[] s) {
        int left = 0, right = s.length - 1;
        while (left < right) {
            char temp = s[left];
            s[left] = s[right];
            s[right] = temp;
            left++;
            right--;
        }
    }
}
```

#### 541.反转字符串 II

>给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。
>
>如果剩余字符少于 k 个，则将剩余字符全部反转。
>如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
>
>
>示例 1：
>
>输入：s = "abcdefg", k = 2
>输出："bacdfeg"
>示例 2：
>
>输入：s = "abcd", k = 2
>输出："bacd"
>
>
>提示：
>
>1 <= s.length <= 104
>s 仅由小写英文组成
>1 <= k <= 104

###### 544.1.解题思路

>反转每个下标从 2k 的倍数开始的，长度为 k 的子串。若该子串长度不足 k，则反转整个子串。

###### 544.2.AC代码-Java版本

```java
class Solution {
    public String reverseStr(String s, int k) {
        char[] chars = s.toCharArray();
        int n = chars.length;
        for (int i = 0; i < n; i += 2 * k) {
            revert(chars, i, Math.min(i + k, n) - 1);
        }

        return new String(chars);
    }

    public void revert(char[] chars, int left, int right) {
        while (left < right) {
            char temp = chars[left];
            chars[left] = chars[right];
            chars[right] = temp;
            left++;
            right--;
        }
    }
}
```

#### LCR 122. 路径加密

>假定一段路径记作字符串 `path`，其中以 "`.`" 作为分隔符。现需将路径加密，加密方法为将 `path` 中的分隔符替换为空格 "` `"，请返回加密后的字符串。
>
> **示例 1：**
>
>```
>输入：path = "a.aef.qerf.bb"
>
>输出："a aef qerf bb"
>```

###### LCR 122. 路径加密. AC-Java版本

```java
class Solution {
    public String pathEncryption(String path) {
        char[] chars = path.toCharArray();
        for (int i = 0; i < chars.length; i++) {
            if (chars[i] == '.') {
                chars[i] = ' ';
            }
        }

        return new String(chars);
    }
}
```

#### 151.反转字符串中的单词

>给你一个字符串 s ，请你反转字符串中 单词 的顺序。
>
>单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。
>
>返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。
>
>注意：输入字符串 s中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。
>
> 
>
>示例 1：
>
>输入：s = "the sky is blue"
>输出："blue is sky the"
>
>示例 2：
>
>输入：s = "  hello world  "
>输出："world hello"
>解释：反转后的字符串中不能存在前导空格和尾随空格。
>
>示例 3：
>
>输入：s = "a good   example"
>输出："example good a"
>解释：如果两个单词间有多余的空格，反转后的字符串需要将单词间的空格减少到仅有一个。
>
>**提示：**
>
>- `1 <= s.length <= 104`
>- `s` 包含英文大小写字母、数字和空格 `' '`
>- `s` 中 **至少存在一个** 单词

###### 151.1.解题思路

>用正则表达式分割字符串，注意多空格情形

###### 151.2.java版本

```java
class Solution {
    public String reverseWords(String s) {
        String[] split = s.split("[ ]+");
        int left = 0, right = split.length - 1;
        while (left < right){
            String temp = split[left];
            split[left] = split[right];
            split[right] = temp;
            left++;
            right--;
        }
        
        return  String.join(" ", split).trim();
    }
}
```

#### LCR 182. 动态口令

>某公司门禁密码使用动态口令技术。初始密码为字符串 `password`，密码更新均遵循以下步骤：
>
>- 设定一个正整数目标值 `target`
>- 将 `password` 前 `target` 个字符按原顺序移动至字符串末尾
>
>请返回更新后的密码字符串。
>
>**示例 1：**
>
>```
>输入: password = "s3cur1tyC0d3", target = 4
>输出: "r1tyC0d3s3cu"
>```
>
>**示例 2：**
>
>```
>输入: password = "lrloseumgh", target = 6
>输出: "umghlrlose"
>```
>
>**提示：**
>
>- `1 <= target < password.length <= 10000`

###### LCR 182. 动态口令.AC-Java版本

```java
class Solution {
    public String reverseLeftWords(String s, int n) {
        int length = s.length();
        return s.substring(n, length) + s.substring(0, n) ;
    }
}
```



