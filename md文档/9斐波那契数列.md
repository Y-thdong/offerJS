### [剑指 Offer 10- I. 斐波那契数列](https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/)

Difficulty: **简单**


写一个函数，输入 `n` ，求斐波那契（Fibonacci）数列的第 `n` 项。斐波那契数列的定义如下：

```
F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
```

斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

**示例 1：**

```
输入：n = 2
输出：1
```

**示例 2：**

```
输入：n = 5
输出：5
```

**提示：**

*   `0 <= n <= 100`

注意：本题与主站 509 题相同：https://leetcode-cn.com/problems/fibonacci-number/


#### Solution

Language: **JavaScript**

我的解
```JavaScript
​    var fib = function (n) {
        let fibArr = [0, 1];
        for (let i = 0; fibArr.length != n + 1 && n != 0; i++) {
            if (n > 78) fibArr.push(BigInt(fibArr[fibArr.length - 1]) + BigInt(fibArr[fibArr.length - 2]));
            else fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
        }
        if (n > 44) {
            return (BigInt(fibArr[n]) % BigInt(1000000007)).toString();
        }
        return fibArr[n];
    };
```
用时最少解
```JavaScript
    var fib = function (n) {
        if (n <= 1) {
            return n;
        } else {
            const arr = [0, 1];
            while (arr.length < n) {
                const temp = arr[arr.length - 1] + arr[arr.length - 2] > 1000000007 ?
                    (arr[arr.length - 1] + arr[arr.length - 2]) % 1000000007 :
                    arr[arr.length - 1] + arr[arr.length - 2];
                arr.push(temp);
            }
            return (arr[arr.length - 1] + arr[arr.length - 2]) % 1000000007;
        }
    };
```
内存最少解
```JavaScript
    var fib = function (n) {
        let dp = [0, 1]
        for (let i = 2; i < n + 1; i++) {
            dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007
        }
        return dp[n]
    };
```