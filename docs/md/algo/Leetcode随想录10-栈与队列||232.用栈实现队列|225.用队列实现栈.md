-  [232. 用栈实现队列](https://leetcode.cn/problems/implement-queue-using-stacks/)
-  [225. 用队列实现栈](https://leetcode.cn/problems/implement-stack-using-queues/)

----

#### 232.2.用栈实现队列

>请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）：
>
>实现 MyQueue 类：
>
>void push(int x) 将元素 x 推到队列的末尾
>int pop() 从队列的开头移除并返回元素
>int peek() 返回队列开头的元素 
>boolean empty() 如果队列为空，返回 true ；否则，返回 false
>说明：
>
>你 只能 使用标准的栈操作 —— 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
>你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
>
>
>示例 1：
>
>输入：
>["MyQueue", "push", "push", "peek", "pop", "empty"]
>[[], [1], [2], [], [], []]
>输出：
>[null, null, null, 1, 1, false]
>
>解释：
>MyQueue myQueue = new MyQueue();
>myQueue.push(1); // queue is: [1]
>myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
>myQueue.peek(); // return 1
>myQueue.pop(); // return 1, queue is [2]
>myQueue.empty(); // return false
>
>
>提示：
>
>1 <= x <= 9
>最多调用 100 次 push、pop、peek 和 empty
>假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）

###### 232.2.1.解题思路

> ​	栈的特点是先进后出，只有一个入口，队列是先进先出，一头进一头出。要想用栈实现队列，那就是要满足先进先出的规则。这里考虑使用两个栈，一个入栈，用个用于出栈，将入栈后的元素依次取出放入用于出栈的栈，这样就可以实现整体元素的先进先出。

###### 232.2.2.java版本

```java
class MyQueue {

        Stack<Integer> inStack;
        Stack<Integer> outStack;

        public MyQueue() {
            inStack = new Stack<>();
            outStack = new Stack<>();

        }

        public void push(int x) {
            inStack.push(x);
        }+

        public int pop() {
            if (!outStack.isEmpty()) {
                return outStack.pop();
            }

            while (!inStack.empty()) {
                outStack.push(inStack.pop());
            }

            return outStack.pop();
        }

        public int peek() {
            if (!outStack.isEmpty()) {
                return outStack.peek();
            }

            while (!inStack.empty()) {
                outStack.push(inStack.pop());
            }

            return outStack.peek();
        }

        public boolean empty() {
            return outStack.empty() && inStack.empty();
        }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * boolean param_4 = obj.empty();
 */
```

#### 225.用队列实现栈

>请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。
>
>实现 MyStack 类：
>
>void push(int x) 将元素 x 压入栈顶。
>int pop() 移除并返回栈顶元素。
>int top() 返回栈顶元素。
>boolean empty() 如果栈是空的，返回 true ；否则，返回 false 。
>
>
>注意：
>
>你只能使用队列的基本操作 —— 也就是 push to back、peek/pop from front、size 和 is empty 这些操作。
>你所使用的语言也许不支持队列。 你可以使用 list （列表）或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
>
>
>示例：
>
>输入：
>["MyStack", "push", "push", "top", "pop", "empty"]
>[[], [1], [2], [], [], []]
>输出：
>[null, null, null, 2, 2, false]
>
>解释：
>MyStack myStack = new MyStack();
>myStack.push(1);
>myStack.push(2);
>myStack.top(); // 返回 2
>myStack.pop(); // 返回 2
>myStack.empty(); // 返回 False
>
>
>提示：
>
>1 <= x <= 9
>最多调用100 次 push、pop、top 和 empty
>每次调用 pop 和 top 都保证栈不为空

###### 225.1.解题思路

###### 225.2.java版本

```java
class MyStack {

    private Queue<Integer> queue1;

    private Queue<Integer> queue2;

    public MyStack() {
        this.queue1 = new LinkedList<>();
        this.queue2 = new LinkedList<>();
    }

    public void push(int x) {
        queue2.offer(x);
        while (!queue1.isEmpty()){
            queue2.offer(queue1.poll());
        }
        
        Queue<Integer> temp = queue1;
        queue1 = queue2;
        queue2 = temp;
    }

    public int pop() {
        return queue1.poll();
    }

    public int top() {
        return  queue1.peek();

    }

    public boolean empty() {
        return queue1.isEmpty();
    }
}
```

