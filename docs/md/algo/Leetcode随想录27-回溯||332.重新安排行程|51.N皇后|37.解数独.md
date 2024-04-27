-  [332. 重新安排行程](https://leetcode.cn/problems/reconstruct-itinerary/)
-  [51. N 皇后](https://leetcode.cn/problems/n-queens/)
-  [37. 解数独](https://leetcode.cn/problems/sudoku-solver/)

----

#### 332.重新安排行程

>给你一份航线列表 `tickets` ，其中 `tickets[i] = [fromi, toi]` 表示飞机出发和降落的机场地点。请你对该行程进行重新规划排序。
>
>所有这些机票都属于一个从 `JFK`（肯尼迪国际机场）出发的先生，所以该行程必须从 `JFK` 开始。如果存在多种有效的行程，请你按字典排序返回最小的行程组合。
>
>- 例如，行程 `["JFK", "LGA"]` 与 `["JFK", "LGB"]` 相比就更小，排序更靠前。
>
>假定所有机票至少存在一种合理的行程。且所有的机票 必须都用一次 且 只能用一次。
>
>**示例 1：**
>
>![img](https://assets.leetcode.com/uploads/2021/03/14/itinerary1-graph.jpg)
>
>```
>输入：tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
>输出：["JFK","MUC","LHR","SFO","SJC"]
>```
>
>**示例 2：**
>
>![img](https://assets.leetcode.com/uploads/2021/03/14/itinerary2-graph.jpg)
>
>```
>输入：tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
>输出：["JFK","ATL","JFK","SFO","ATL","SFO"]
>解释：另一种有效的行程是 ["JFK","SFO","ATL","JFK","ATL","SFO"] ，但是它字典排序更大更靠后。 
>```
>
>**提示：**
>
>- `1 <= tickets.length <= 300`
>- `tickets[i].length == 2`
>- `fromi.length == 3`
>- `toi.length == 3`
>- `fromi` 和 `toi` 由大写英文字母组成
>- `fromi != toi`

**AC代码**

```java
class Solution {

    public List<String> findItinerary(List<List<String>> tickets) {
        HashMap<String, PriorityQueue<String>> map = new HashMap<>();
        for(List<String> ticket : tickets) {
            map.putIfAbsent(ticket.get(0), new PriorityQueue<>());
            map.get(ticket.get(0)).add(ticket.get(1));
        }
        List<String> ans = new ArrayList<>();
        dfs(map, ans, "JFK");
        return ans;
    }

    public void dfs(HashMap<String, PriorityQueue<String>> map, List<String> ans, String from) {
        PriorityQueue<String> pq = map.get(from);
        while(pq != null && !pq.isEmpty()) {
            dfs(map, ans, pq.remove());
        }
        ans.add(0, from);
    }
}
```



#### 51.N皇后

>按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。
>
>**n 皇后问题** 研究的是如何将 `n` 个皇后放置在 `n×n` 的棋盘上，并且使皇后彼此之间不能相互攻击。
>
>给你一个整数 `n` ，返回所有不同的 **n 皇后问题** 的解决方案。
>
>每一种解法包含一个不同的 **n 皇后问题** 的棋子放置方案，该方案中 `'Q'` 和 `'.'` 分别代表了皇后和空位。
>
>**示例 1：**
>
>![img](https://assets.leetcode.com/uploads/2020/11/13/queens.jpg)
>
>```
>输入：n = 4
>输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
>解释：如上图所示，4 皇后问题存在两个不同的解法。
>```
>
>**示例 2：**
>
>```
>输入：n = 1
>输出：[["Q"]] 
>```
>
>**提示：**
>
>- `1 <= n <= 9`

**AC代码**

```java
class Solution {
    public List<List<String>> solveNQueens(int n) {
        List<List<String>> ans = new ArrayList<>();

        char[][] chessBoard = new char[n][n];
        for (char[] chars : chessBoard) {
            Arrays.fill(chars, '.');
        }

        solveNQueensDFS(n, 0, chessBoard, ans);
        return ans;


    }

    public void solveNQueensDFS(int n, int row, char[][] chessBoard, List<List<String>> ans) {
        if (row == n) {
            arrayToList(chessBoard, ans);
            return;
        }

        for (int col = 0; col < n; col++) {
            if (isValidPosition(n, row, col, chessBoard)) {
                chessBoard[row][col] = 'Q';
                solveNQueensDFS(n, row + 1, chessBoard, ans);
                chessBoard[row][col] = '.';
            }
        }


    }

    public void arrayToList(char[][] chessboard, List<List<String>> ans) {
        List<String> list = new ArrayList<>();
        for (char[] chars : chessboard) {
            list.add(String.copyValueOf(chars));

        }
        ans.add(list);
    }


    public boolean isValidPosition(int n, int row, int col, char[][] chessBoard) {
        for (int i = 0; i < row; i++) {
            if (chessBoard[i][col] == 'Q') {
                return false;
            }
        }

        for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (chessBoard[i][j] == 'Q') {
                return false;
            }
        }

        for (int i = row - 1, j = col + 1; i >= 0 && j <= n - 1; i--, j++) {
            if (chessBoard[i][j] == 'Q') {
                return false;
            }
        }

        return true;
    }
}
```

