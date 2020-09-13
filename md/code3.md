### [剑指 Offer 03\. 数组中重复的数字](https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/)

Difficulty: **简单**


找出数组中重复的数字。

在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

**示例 1：**

```
输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3 
```

**限制：**

`2 <= n <= 100000`


#### Solution

Language: **JavaScript**

我的解1
```JavaScript
    var findRepeatNumber = function (nums) {
       let obj = {};
       for (let index = 0; index < nums.length; index++) {
          if (obj[nums[index].toString()] == undefined) {
             obj[nums[index]] = "any";
          } else {
             return nums[index];
          }
       }
    };
```
我的解2
```JavaScript
    var findRepeatNumber = function (nums) {
       let s = new Set();
       for (var i in nums) {
          var curLenth = s.size;
          s.add(nums[i]);
          if (s.size == curLenth)
             return nums[i];
       }
    };
```
我的解3
```JavaScript
    var findRepeatNumber = function (nums) {
        let temp;
        for (let i = 0; i < nums.length; i++) {
            while (nums[i] != i) {
                if (nums[i] == nums[nums[i]]) {
                    return nums[i];
                }
                temp = nums[i];
                nums[i] = nums[temp];
                nums[temp] = temp;
            }
        }
        return -1;
    };
```
用时最少解
```JavaScript
    var findRepeatNumber = function (nums) {
        let s = new Set()
        for (let element of nums) {
            if (s.has(element)) {
                return element
            } else {
                s.add(element)
            }
        }
        return;
    };
```
内存最少解
```JavaScript
    var findRepeatNumber = function (nums) {
        for (var i = 0; i < nums.length - 1; i++) {
            for (var j = i + 1; j < nums.length; j++) {
                if (nums[i] == nums[j]) {
                    return nums[i];
                }
            }
        }
    };
```
剑指offer书中的解法，不易理解
```javascript
    var findRepeatNumber = function (nums) {
       for (var i = 0; i < nums.length; i++) {
          while (i != nums[i] && nums[nums[i]] != nums[i]) { 
             var tmp = nums[nums[i]];
             nums[nums[i]] = nums[i];
             nums[i] = tmp;
          }
          if (i !== nums[i] && nums[nums[i]] == nums[i]) {
             return nums[i];
          }
       }
    };
```