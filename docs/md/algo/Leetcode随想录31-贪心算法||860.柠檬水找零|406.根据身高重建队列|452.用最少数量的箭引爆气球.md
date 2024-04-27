-  [860. 柠檬水找零](https://leetcode.cn/problems/lemonade-change/)
-  [406. 根据身高重建队列](https://leetcode.cn/problems/queue-reconstruction-by-height/)
-  [452. 用最少数量的箭引爆气球](https://leetcode.cn/problems/minimum-number-of-arrows-to-burst-balloons/)

----

#### 860. 柠檬水找零

>在柠檬水摊上，每一杯柠檬水的售价为 5 美元。顾客排队购买你的产品，（按账单 bills 支付的顺序）一次购买一杯。
>
>每位顾客只买一杯柠檬水，然后向你付 5 美元、10 美元或 20 美元。你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付 5 美元。
>
>注意，一开始你手头没有任何零钱。
>
>给你一个整数数组 bills ，其中 bills[i] 是第 i 位顾客付的账。如果你能给每位顾客正确找零，返回 true ，否则返回 false 。
>
> 
>
>示例 1：
>
>输入：bills = [5,5,5,10,20]
>输出：true
>解释：
>前 3 位顾客那里，我们按顺序收取 3 张 5 美元的钞票。
>第 4 位顾客那里，我们收取一张 10 美元的钞票，并返还 5 美元。
>第 5 位顾客那里，我们找还一张 10 美元的钞票和一张 5 美元的钞票。
>由于所有客户都得到了正确的找零，所以我们输出 true。
>示例 2：
>
>输入：bills = [5,5,10,10,20]
>输出：false
>解释：
>前 2 位顾客那里，我们按顺序收取 2 张 5 美元的钞票。
>对于接下来的 2 位顾客，我们收取一张 10 美元的钞票，然后返还 5 美元。
>对于最后一位顾客，我们无法退回 15 美元，因为我们现在只有两张 10 美元的钞票。
>由于不是每位顾客都得到了正确的找零，所以答案是 false。
>
>
>提示：
>
>1 <= bills.length <= 105
>bills[i] 不是 5 就是 10 或是 20 

```java
class Solution {
    public boolean lemonadeChange(int[] bills) {
        int fiveCount = 0, tenCount = 0;
        int n = bills.length;
        for (int bill : bills) {
            if (bill == 5) {
                fiveCount++;
            } else if (bill == 10) {
                if (fiveCount < 1) {
                    return false;
                }
                fiveCount--;
                tenCount++;
            } else if (bill == 20) {
                if ((tenCount < 1 && fiveCount < 3) || (tenCount >= 1 && fiveCount < 1)) {
                    return false;
                }
                if (tenCount >= 1) {
                    tenCount--;
                    fiveCount--;
                } else {
                    fiveCount -= 3;
                }
            }
        }

        return true;
    }
}
```



#### 406. 根据身高重建队列

>假设有打乱顺序的一群人站成一个队列，数组 people 表示队列中一些人的属性（不一定按顺序）。每个 people[i] = [hi, ki] 表示第 i 个人的身高为 hi ，前面 正好 有 ki 个身高大于或等于 hi 的人。
>
>请你重新构造并返回输入数组 people 所表示的队列。返回的队列应该格式化为数组 queue ，其中 queue[j] = [hj, kj] 是队列中第 j 个人的属性（queue[0] 是排在队列前面的人）。
>
> 
>
>示例 1：
>
>输入：people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
>输出：[[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
>解释：
>编号为 0 的人身高为 5 ，没有身高更高或者相同的人排在他前面。
>编号为 1 的人身高为 7 ，没有身高更高或者相同的人排在他前面。
>编号为 2 的人身高为 5 ，有 2 个身高更高或者相同的人排在他前面，即编号为 0 和 1 的人。
>编号为 3 的人身高为 6 ，有 1 个身高更高或者相同的人排在他前面，即编号为 1 的人。
>编号为 4 的人身高为 4 ，有 4 个身高更高或者相同的人排在他前面，即编号为 0、1、2、3 的人。
>编号为 5 的人身高为 7 ，有 1 个身高更高或者相同的人排在他前面，即编号为 1 的人。
>因此 [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]] 是重新构造后的队列。
>示例 2：
>
>输入：people = [[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]]
>输出：[[4,0],[5,0],[2,2],[3,2],[1,4],[6,0]]
>
>
>提示：
>
>1 <= people.length <= 2000
>0 <= hi <= 106
>0 <= ki < people.length
>题目数据确保队列可以被重建

**AC代码**

```java
class Solution {
    public int[][] reconstructQueue(int[][] people) {
        Arrays.sort(people, (a, b) -> {
            if (a[0] == b[0]) {
                return a[1] - b[1];
            } else {
                return b[0] - a[0];
            }
        });

        LinkedList<int[]> queue = new LinkedList<>();
        for (int[] person : people) {
            queue.add(person[1], person);
        }

        return queue.toArray(new int[queue.size()][]);
    }
}
```



#### 452.用最少量的箭引爆气球

>有一些球形气球贴在一堵用 XY 平面表示的墙面上。墙面上的气球记录在整数数组 `points` ，其中`points[i] = [xstart, xend]` 表示水平直径在 `xstart` 和 `xend`之间的气球。你不知道气球的确切 y 坐标。
>
>一支弓箭可以沿着 x 轴从不同点 **完全垂直** 地射出。在坐标 `x` 处射出一支箭，若有一个气球的直径的开始和结束坐标为 `x``start`，`x``end`， 且满足  `xstart ≤ x ≤ x``end`，则该气球会被 **引爆** 。可以射出的弓箭的数量 **没有限制** 。 弓箭一旦被射出之后，可以无限地前进。
>
>给你一个数组 `points` ，*返回引爆所有气球所必须射出的 **最小** 弓箭数* 。
>
> **示例 1：**
>
>```
>输入：points = [[10,16],[2,8],[1,6],[7,12]]
>输出：2
>解释：气球可以用2支箭来爆破:
>-在x = 6处射出箭，击破气球[2,8]和[1,6]。
>-在x = 11处发射箭，击破气球[10,16]和[7,12]。
>```
>
>**示例 2：**
>
>```
>输入：points = [[1,2],[3,4],[5,6],[7,8]]
>输出：4
>解释：每个气球需要射出一支箭，总共需要4支箭。
>```
>
>**示例 3：**
>
>```
>输入：points = [[1,2],[2,3],[3,4],[4,5]]
>输出：2
>解释：气球可以用2支箭来爆破:
>- 在x = 2处发射箭，击破气球[1,2]和[2,3]。
>- 在x = 4处射出箭，击破气球[3,4]和[4,5]。
>```
>
>**提示:**
>
>- `1 <= points.length <= 105`
>- `points[i].length == 2`
>- `-231 <= xstart < xend <= 231 - 1`

**AC代码**

```java
class Solution {
    public int findMinArrowShots(int[][] points) {
        Arrays.sort(points, (a, b) -> Integer.compare(a[0], b[0]));

        int preEnd = points[0][1];
        int arrowCount = 1;
        for (int i = 1; i < points.length; i++) {
            if (preEnd < points[i][0]) {
                arrowCount++;
                preEnd = points[i][1];
            } else {
                preEnd = Math.min(preEnd, points[i][1]);
            }
        }

        return arrowCount;
    }
}
```

