- [x] [62.不同路径](https://leetcode.cn/problems/unique-paths/)

- [x] [63.不同路径 II](https://leetcode.cn/problems/unique-paths-ii/)

----

#### 62.不同路径

>一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
>
>机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
>
>问总共有多少条不同的路径？
>
> 输入：m = 3, n = 2
>输出：3
>解释：
>从左上角开始，总共有 3 条路径可以到达右下角。
>
>1. 向右 -> 向下 -> 向下
>2. 向下 -> 向下 -> 向右
>3. 向下 -> 向右 -> 向下
>
>
>
>总结：dp二维数组的含义，递推公式的推导，遍历顺序



**AC代码**

```java
class Solution {
    public int uniquePaths(int m, int n) {
        int[][] dp = new int[m][n];

        Arrays.fill(dp[0], 1);
        for (int i = 0; i < m; i++) {
            dp[i][0] = 1;
        }

        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }

        return dp[m - 1][n - 1];
    }
}
```



#### 63.不同路径II

>本题与62.不同路径有异曲同工之妙，区别在于遇到障碍物时需要将`dp[i][j]`初始化为0；

**AC代码**

```java
class Solution {
    public int uniquePathsWithObstacles(int[][] obstacleGrid) {
        int m = obstacleGrid.length;
        int n = obstacleGrid[0].length;

        int[][] dp = new int[m][n];

        if (obstacleGrid[0][0] == 1 || obstacleGrid[m - 1][n - 1] == 1) {
            return 0;
        }

        for (int i = 0; i < m && obstacleGrid[i][0] == 0; i++) {
            dp[i][0] = 1;
        }

        for (int j = 0; j < n && obstacleGrid[0][j] == 0; j++) {
            dp[0][j] = 1;
        }

        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[i][j] = obstacleGrid[i][j] == 1 ? 0 : dp[i - 1][j] + dp[i][j - 1];
            }
        }

        return dp[m - 1][n - 1];
    }
}
```

