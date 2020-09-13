### [剑指 Offer 05\. 替换空格](https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/)

Difficulty: **简单**


请实现一个函数，把字符串 `s` 中的每个空格替换成"%20"。

**示例 1：**

```
输入：s = "We are happy."
输出："We%20are%20happy."
```

**限制：**

`0 <= s 的长度 <= 10000`


#### Solution

Language: **JavaScript**

我的解
```JavaScript
    var replaceSpace = function (s) {
       let reg = /\s/ig;
       let str = s.replace(reg, "%20");
       return str;
    };
```
用时最少解
```JavaScript
    var replaceSpace = function (s) {
        return s.replace(/\ /g, '%20');
    };
```
内存最少解
```JavaScript
    var replaceSpace = function (s) {
        if (typeof s == "string" && s.length > 0 && s.length < 1000) {
            return s.split(' ').join('%20')
        }
        return ''
    };
```
