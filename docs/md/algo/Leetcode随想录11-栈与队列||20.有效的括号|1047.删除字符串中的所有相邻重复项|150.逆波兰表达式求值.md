- [x] [20. 有效的括号](https://leetcode.cn/problems/valid-parentheses/)
- [x] [1047. 删除字符串中的所有相邻重复项](https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string/)
- [ ] [150. 逆波兰表达式求值](https://leetcode.cn/problems/evaluate-reverse-polish-notation/)

----

#### 20.有效的括号

>给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
>
>有效字符串需满足：
>
>左括号必须用相同类型的右括号闭合。
>左括号必须以正确的顺序闭合。
>每个右括号都有一个对应的相同类型的左括号。

###### 20.1.解题思路

>需要与之前的字符比较，看是否是一对，栈有先进后出的特点符合本题特点，即遇到左括号入栈，遇到右括号时将对应栈顶左括号出栈，遍历完所有括号后，stack是空，为避免stack.pop操作报错，可给stack赋初始值'?'。

###### 20.2.java版本

```java
class Solution {
    public boolean isValid(String s) {

        int n = s.length();
        if (n % 2 != 0) {
            return false;
        }

        Map<Character, Character> pairs = new HashMap<>() {{
            put(')', '(');
            put(']', '[');
            put('}', '{');
        }};
        Deque<Character> deque = new LinkedList<>();
        for (int i = 0; i < n; i++) {
            char ch = s.charAt(i);
            if (pairs.containsKey(ch)) {
                if (deque.isEmpty() || deque.peek() != pairs.get(ch)) {
                    return false;
                }
                deque.pop();
            } else {
                deque.push(ch);
            }
        }

        return deque.isEmpty();
    }
}
```



#### 1047.删除字符串中的所有相邻重复项

>给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。
>
>在 S 上反复执行重复项删除操作，直到无法继续删除。
>
>在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。
>
> 
>
>示例：
>
>输入："abbaca"
>输出："ca"
>解释：
>例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
>
>
>提示：
>
>1 <= S.length <= 20000
>S 仅由小写英文字母组成。

###### 1047.1.解题思路

​	考虑用字符串代替栈来处理，用新的标识表示字符串下标值

###### 1047.2.java版本

```java
class Solution {
    public String removeDuplicates(String s) {
        StringBuilder res = new StringBuilder();
        int n = s.length();
        int top = -1;
        for (int i = 0; i < n; i++) {
            char ch = s.charAt(i);
            if(top >= 0 && res.charAt(top) == ch){
                res.deleteCharAt(top);
                top--;
            }else {
                res.append(ch);
                top++;
            }
        }
        
        return res.toString();
    }
}
```



#### 150.逆波兰表达式求值

>给你一个字符串数组 tokens ，表示一个根据 逆波兰表示法 表示的算术表达式。
>
>请你计算该表达式。返回一个表示表达式值的整数。
>
>注意：
>
>有效的算符为 '+'、'-'、'*' 和 '/' 。
>每个操作数（运算对象）都可以是一个整数或者另一个表达式。
>两个整数之间的除法总是 向零截断 。
>表达式中不含除零运算。
>输入是一个根据逆波兰表示法表示的算术表达式。
>答案及所有中间计算结果可以用 32 位 整数表示。
>
>
>示例 1：
>
>输入：tokens = ["2","1","+","3","*"]
>输出：9
>解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9
>示例 2：
>
>输入：tokens = ["4","13","5","/","+"]
>输出：6
>解释：该算式转化为常见的中缀算术表达式为：(4 + (13 / 5)) = 6
>示例 3：
>
>输入：tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
>输出：22
>解释：该算式转化为常见的中缀算术表达式为：
>  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
>= ((10 * (6 / (12 * -11))) + 17) + 5
>= ((10 * (6 / -132)) + 17) + 5
>= ((10 * 0) + 17) + 5
>= (0 + 17) + 5
>= 17 + 5
>= 22
>
>
>提示：
>
>1 <= tokens.length <= 104
>tokens[i] 是一个算符（"+"、"-"、"*" 或 "/"），或是在范围 [-200, 200] 内的一个整数
>
>
>逆波兰表达式：
>
>逆波兰表达式是一种后缀表达式，所谓后缀就是指算符写在后面。
>
>平常使用的算式则是一种中缀表达式，如 ( 1 + 2 ) * ( 3 + 4 ) 。
>该算式的逆波兰表达式写法为 ( ( 1 2 + ) ( 3 4 + ) * ) 。
>逆波兰表达式主要有以下两个优点：
>
>去掉括号后表达式无歧义，上式即便写成 1 2 + 3 4 + * 也可以依据次序计算出正确结果。
>

###### 150.1.解题思路

​	适合用栈操作运算：遇到数字则入栈；遇到算符则取出栈顶两个数字进行计算，并将结果压入栈中

###### 150.2.java版本

```java
class Solution {
    public int evalRPN(String[] tokens) {
                Stack<Integer> stack = new Stack<>();
        Map<String, String> pairs = new HashMap<>() {{
            put("+", "+");
            put("-", "-");
            put("*", "*");
            put("/", "/");
        }};
        for (int i = 0; i < tokens.length; i++) {
            String token = tokens[i];
            if (!pairs.containsKey(token)) {
                stack.push(Integer.valueOf(token));
            }else {
                Integer val1 = stack.pop();
                Integer val2 = stack.pop();
                Integer val3 = null;
                if("+".equals(pairs.get(token))){
                    val3 = val1 + val2;
                }
                if("-".equals(pairs.get(token))){
                    val3 = val2 - val1;
                }
                if("*".equals(pairs.get(token))){
                    val3 = val1 * val2;
                }
                if("/".equals(pairs.get(token))){
                    val3 = val2 / val1;
                }
                
                if(val3 != null){
                    stack.push(val3);
                }
            }
        }
        
        return stack.pop();
    }
}
```

