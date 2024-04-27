-  [242. 有效的字母异位词](https://leetcode.cn/problems/valid-anagram/)
-  [349. 两个数组的交集](https://leetcode.cn/problems/intersection-of-two-arrays/)
-  [202. 快乐数](https://leetcode.cn/problems/happy-number/)
-  [1. 两数之和](https://leetcode.cn/problems/two-sum/)

-----

#### 242.有效的字母异位词

> 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
>
> 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
>
> 示例 1:
>
> 输入: s = "anagram", t = "nagaram"
> 输出: true
> 示例 2:
>
> 输入: s = "rat", t = "car"
> 输出: false
>
>
> 提示:
>
> 1 <= s.length, t.length <= 5 * 104
> s 和 t 仅包含小写字母

###### 242.1.解题思路

> ​	首先判断两个字符串数组的长度是否相等，不相等则一定不是字母异位词。其次需要判断每个字母出现的次数是否相等。遍历s中的字母，使用数组记录s中每个字母出现的次数。然后遍历t中的字母，使用上面记录的map数据，每遍历一次,数组中对应的值减1，若减1后小于0则返回false。

###### 242.1.AC代码-Java版本

```java
class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }
        int[] map = new int[26];
        char[] chars = s.toCharArray();
        char[] chart = t.toCharArray();
        for (char ch : chars) {
            map[ch - 'a']++;
        }

        for (char ch : chart) {
            map[ch - 'a']--;
            if (map[ch - 'a'] < 0) {
                return false;
            }
        }

        return true;
    }
}
```



#### 349.两个数组的交集

>给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
>
> 
>
>示例 1：
>
>输入：nums1 = [1,2,2,1], nums2 = [2,2]
>输出：[2]
>示例 2：
>
>输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
>输出：[9,4]
>解释：[4,9] 也是可通过的
>
>
>提示：
>
>1 <= nums1.length, nums2.length <= 1000
>0 <= nums1[i], nums2[i] <= 1000

###### 349.1.解题思路

> * 方案一：比较两个数组之间是否存在交集，遍历数组nums1，对于其中的每一个元素，遍历数组nums2，判断是否有元素与数组nums2中的元素相同，如果有则将元素添加到返回数组中返回。
> * 方案二：比较nums1中的元素是否在nums2中的元素出现，则可使用HashSet，先遍历nums1，使用HashSet记录nums1中的元素，紧接着遍历nums2，并判断set集合中是否包含遍历到的元素，如果包含则将其放入交集Set中，最后将Set集合中的元素添加到数组中并返回。

​	

###### 349.2.AC代码-Java版本

```java
class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        Set<Integer> set1 = new HashSet<>();
        Set<Integer> set2 = new HashSet<>();
        for (int i : nums1) {
            set1.add(i);
        }

        for (int i : nums2) {
            if(set1.contains(i)){
                set2.add(i);
            }
        }

        int[] ans = new int[set2.size()];
        int index = 0;
        for (Integer integer : set2) {
            ans[index++] = integer;
        }
        
        return ans;

    }
}
```



#### 202.快乐数

>编写一个算法来判断一个数 n 是不是快乐数。
>
>「快乐数」 定义为：
>
>对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
>然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
>如果这个过程 结果为 1，那么这个数就是快乐数。
>如果 n 是 快乐数 就返回 true ；不是，则返回 false 。
>
> 
>
>示例 1：
>
>输入：n = 19
>输出：true
>解释：
>12 + 92 = 82
>82 + 22 = 68
>62 + 82 = 100
>12 + 02 + 02 = 1
>示例 2：
>
>输入：n = 2
>输出：false
>
>
>提示：
>
>1 <= n <= 231 - 1

###### 202.1.解题思路

​	如何计算每一次的平方和的关键是获取各个位置的数值，个位数是取模，其他位则是用运算符"/"获取，将每一位的值的平方相加，循环终止条件即是"/"后的数值要大于0，通过上述方法获取每一次需要计算的新值。

​	获取新值后需要判断该值是否等于1，等于1则表示是快乐数，如果不等于则要继续去循环，而如何知道其永不可能是快乐数的方法则是在平方和为1未出现之前，出现了值循环。判断值是否重复出现则可用HashSet。

###### 202.2.java版本

```java
class Solution {
    public boolean isHappy(int n) {
        Set<Integer> set = new HashSet<>();
        while (set.add(n)){
            if(n == 1){
                return true;
            }
            int sum = getNextNumber(n);
            if(sum == 1){
                return true;
            }
            n = sum;
        }

        return false;
    }

    public int getNextNumber(int n){
        int sum = 0;
        while (n > 0){
            int lastFigure = n % 10;
            sum += lastFigure * lastFigure;
            n /= 10;
        }
        return sum;
    }
}
```



#### 1.两数之和

>给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那两个整数，并返回它们的数组下标。
>
>你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
>
>你可以按任意顺序返回答案。
>
> 
>
>示例 1：
>
>输入：nums = [2,7,11,15], target = 9
>输出：[0,1]
>解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
>示例 2：
>
>输入：nums = [3,2,4], target = 6
>输出：[1,2]
>示例 3：
>
>输入：nums = [3,3], target = 6
>输出：[0,1]
>
>
>提示：
>
>2 <= nums.length <= 104
>-109 <= nums[i] <= 109
>-109 <= target <= 109
>只会存在一个有效答案

###### 1.1.解题思路

​	从题目来看，就是求target与数组中元素的差值是否属于数组中的元素，且不能是同一个元素。满足这两点则需要记录已经遍历过的元素及其下标，而既可以记住下标又可以标记元素的，优先考虑哈希表，map在这里最合适。依序遍历数组中的值，记录每一次遍历过的数值，当差值在之前遍历的元素中出现过，则表示找到符合条件的元素。若遍历完成后也没有出现，则表示没有找到符合元素的目标。

###### 1.2.java版本

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; ++i) {
            if(map.containsKey(target-nums[i])){
                return new int[]{map.get(target-nums[i]), i};
            }
            map.put(nums[i], i);
        }
        return new int[0];
    }
}
// 还有暴力解法，双重循环
```

