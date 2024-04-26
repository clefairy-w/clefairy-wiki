- [ ] [454. 四数相加 II](https://leetcode.cn/problems/4sum-ii/)
- [ ] [383. 赎金信](https://leetcode.cn/problems/ransom-note/)
- [ ] [15. 三数之和](https://leetcode.cn/problems/3sum/)
- [ ] [18. 四数之和](https://leetcode.cn/problems/4sum/)

----

#### 454.四数相加 II

>给你四个整数数组 nums1、nums2、nums3 和 nums4 ，数组长度都是 n ，请你计算有多少个元组 (i, j, k, l) 能满足：
>
>0 <= i, j, k, l < n
>nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0

###### 454.1.解题思路

> ​	大事化小，分成2组，ABCD，AB一组，CD一组。先计算AB数组俩俩之和，并用Map结构记录和出现的次数。计算差值，看差值在CD俩俩之和的组合中是否出现，获取其次数并相加。

###### 454.2.java版本

```java
class Solution {
    public int fourSumCount(int[] nums1, int[] nums2, int[] nums3, int[] nums4) {
        Map<Integer, Integer> countABSum = new HashMap<>();
        for (int i : nums1) {
            for (int i1 : nums2) {
                countABSum.put(i + i1, countABSum.getOrDefault(i + i1, 0) + 1);
            }
        }

        int ans = 0;
        for (int i : nums3) {
            for (int i1 : nums4) {
                if (countABSum.containsKey(-i-i1)){
                    ans += countABSum.get(-i-i1);
                }
            }
        }
        
        return ans;
    }
}
```

#### 383.赎金信

>给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
>
>如果可以，返回 true ；否则返回 false 。
>
>magazine 中的每个字符只能在 ransomNote 中使用一次。
>

###### 383..1.解题思路

​	首先ransomNote不能比magazine的长度大，其次ransomNote中字母在magazine中均要出现。先计算magazine中每个字母出现的次数，再遍历ransomNote，比较字母出现次数。

###### 383.2.java版本

```java
class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        if (ransomNote.length() > magazine.length()) {
            return false;
        }

        Map<Character, Integer> magazinMap = new HashMap<>();
        for (int i = 0; i < magazine.length(); i++) {
            magazinMap.put(magazine.charAt(i), magazinMap.getOrDefault(magazine.charAt(i), 0) + 1);
        }
        for (int i = 0; i < ransomNote.length(); i++) {
            magazinMap.put(ransomNote.charAt(i), magazinMap.getOrDefault(ransomNote.charAt(i), 0) - 1);
            if (magazinMap.getOrDefault(ransomNote.charAt(i), 0) < 0) {
                return false;
            }
        }

        return true;
    }
}
```

```java
class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        if (magazine == null || magazine.length() < ransomNote.length()) {
            return false;
        }

        int[] map = new int[26];

        for (char ch : magazine.toCharArray()) {
            map[ch - 'a']++;
        }

        for (char ch : ransomNote.toCharArray()) {
            map[ch - 'a']--;
            if (map[ch - 'a'] < 0) {
                return false;
            }
        }

        return true;
    }
}
```



#### 15.三数之和

>给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
>
>你返回所有和为 0 且不重复的三元组。
>
>注意：答案中不可以包含重复的三元组。
>

###### 15.1.解题思路

>* 特判，对于数组长度 n，如果数组为 null 或者数组长度小于 3，返回 [][][]。
>* 对数组进行排序。
>* 遍历排序后数组：
>  * 若 nums[i]>0：因为已经排序好，所以后面不可能有三个数加和等于 0，直接返回结果。
>  * 对于重复元素：跳过，避免出现重复解
>  * 令左指针 L=i+1，右指针 R=n−1，当 L<R 时，执行循环：
>    * 当 nums[i]+nums[L]+nums[R]==0，执行循环，判断左界和右界是否和下一位置重复，去除重复解。并同时将 L,R 移到下一位置，寻找新的解
>    * 若和大于 0，说明 nums[R] 太大，R 左移
>    * 若和小于 0，说明 nums[L] 太小，L 右移

###### 15.2.java版本

```java
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> ans = new ArrayList<>();
        if(nums == null || nums.length <=2){
            return ans;
        }
        
        Arrays.sort(nums);
        
        for (int i = 0; i < nums.length -2; i++){
            if(nums[i] > 0){
                break;
            }
            
            if(i > 0 && nums[i] == nums[i -1]){
                continue;
            }
            
            int target = -nums[i];
            int left = i+1, right = nums.length -1;
            while (left < right){
                if(nums[left] + nums[right] == target){
                    ans.add(new ArrayList<>(Arrays.asList(nums[i], nums[left], nums[right])));
                    left++;
                    right--;
                    while (left < right && nums[left] == nums[left - 1]){
                        left++;
                    }
                    while (left < right && nums[right] == nums[right+1]){
                        right--;
                    }
                }else if(nums[left] + nums[right] < target){
                    left++;
                }else {
                    right--;
                }
            }
        }
        
        return ans;
    }
}
```

```java
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();

        Arrays.sort(nums);
        for (int i = 0; i < nums.length - 2; i++) {
            if (nums[i] > 0) {
                break;
            }

            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }
            
            int j = i + 1, k = nums.length - 1;
            while (j < k) {
                int sum = nums[i] + nums[j] + nums[k];
                if (sum > 0) {
                    k--;
                } else if (sum < 0) {
                    j++;
                } else {
                    List<Integer> list = new ArrayList<>();
                    list.add(nums[i]);
                    list.add(nums[j]);
                    list.add(nums[k]);
                    res.add(list);
                    j++;
                    k--;
                    while (j < k && nums[j] == nums[j - 1]) {
                        j++;
                    }
                    while (j < k && nums[k] == nums[k + 1]) {
                        k--;
                    }
                }
            }
        }

        return res;
    }
}
```



#### 18.四数之和

###### 18.1.解题思路

###### 18.2.java版本

```java
class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        List<List<Integer>> ans = new ArrayList<>();
        if(nums == null || nums.length <= 3){
            return ans;
        }

        Arrays.sort(nums);

        for (int first = 0; first < nums.length -3; first++){
            
            if(first > 0 &&nums[first] == nums[first-1]){
                continue;
            }

            if((long)nums[first] + nums[first+1] + nums[first+2] + nums[first+3] > target){
                break;
            }

            if((long)nums[first] + nums[nums.length -3] + nums[nums.length -2] + nums[nums.length -1] < target){
                continue;
            }

            int threeSum = target - nums[first];
            for(int second = first + 1; second < nums.length - 2; second++){
                if(second > first+1 && nums[second] == nums[second-1]){
                    continue;
                }
                if((long)nums[second] + nums[second+1] + nums[second+2] > threeSum){
                    break;
                }
                if((long)nums[second] + nums[nums.length -2] + nums[nums.length -1]  < threeSum){
                    continue;
                }
                int left = second + 1, right =nums.length -1;
                int twoSum = threeSum - nums[second];
                while (left < right){
                    long sum = (long) nums[left] + nums[right];
                    if(sum == twoSum){
                        ans.add(Arrays.asList(nums[first], nums[second], nums[left], nums[right]));
                        left++;
                        right--;
                        while (left < right && nums[left] == nums[left-1]){
                            left++;
                        }
                        while (left < right && nums[right] == nums[right+1]){
                            right--;
                        }
                    }else if(sum < twoSum){
                        left++;
                    }else {
                        right--;
                    }
                }
            }

        }

        return ans;
    }
}
```

