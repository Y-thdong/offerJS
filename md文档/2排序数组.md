### [912\. 排序数组](https://leetcode-cn.com/problems/sort-an-array/)

Difficulty: **中等**


给你一个整数数组 `nums`，请你将该数组升序排列。

**示例 1：**

```
输入：nums = [5,2,3,1]
输出：[1,2,3,5]
```

**示例 2：**

```
输入：nums = [5,1,1,2,0,0]
输出：[0,0,1,1,2,5]
```

**提示：**

1.  `1 <= nums.length <= 50000`
2.  `-50000 <= nums[i] <= 50000`


#### Solution

Language: **JavaScript**

我的解1
```JavaScript
    var sortArray = function (nums) {
        return nums.sort(function (a, b) {
            return a - b;
        })
    };
```
我的解2
```JavaScript
    var sortArray = function (nums) {
        for (var i = 0; i < nums.length; i++) {
            for (var j = i + 1; j < nums.length; j++) {
                if (nums[i] > nums[j]) {
                    // a = [b, b = a][0]; // 少见的变量值互换方式
                    nums[i] = [nums[j], nums[j] = nums[i]][0];
                }
            }
        }
        return (nums);
    };
```
我的解3 快速排序
```JavaScript
    var sortArray = function (nums) {
        // https://blog.csdn.net/qq_42842786/article/details/104237401
        // JS函数都是按值来传递到的，所以nums是引用类型值，所以传入的是地址值
        // 首先需要有一个基准数，而且基准数在变，所以设一个变量存储基准，还有左右两个哨兵
        function quicksort(left, right) //传入两个哨兵
        {
            var key = nums[left], //定义基准数key
                i = left, //0
                j = right, //2
                t;
            if (left > right) return; //当传入哨兵错误会结束当前函数
            console.log("kezai ");
            while (i != j) //哨兵未相遇才会执行循环
            {
                while (nums[j] >= key && i < j)
                    j--; //条件成立代表哨兵j还未找到小于基准数的值，故j--
                while (nums[i] <= key && i < j)
                    i++; //条件成立代表哨兵i还未找到大于基准数的值，故i++
                if (i < j) //哨兵定位后交换数值
                {
                    nums[i] = [nums[j], nums[j] = nums[i]][0];
                }
            }
            nums[left] = [nums[i], nums[i] = nums[left]][0]; //交换基准数与哨兵的值
            quicksort(left, i - 1);
            quicksort(i + 1, right);
        }
        quicksort(0, nums.length - 1);
        return nums;
    };
```
用时最少解1 归并排序
```JavaScript
    var sortArray = function (arr) {
        return mergeSort(arr, 0, arr.length - 1)
    }

    function mergeSort(arr, start, end) {
        if (start >= end) return [arr[start]]
        let mid = (start + end) / 2 | 0
        return merge(mergeSort(arr, start, mid), mergeSort(arr, mid + 1, end))
    }

    function merge(left, right) {
        let i = 0,
            j = 0,
            len1 = left.length,
            len2 = right.length,
            res = []
        while (i < len1 && j < len2) {
            if (left[i] <= right[j]) {
                res.push(left[i++])
            } else {
                res.push(right[j++])
            }
        }
        while (i < len1) res.push(left[i++])
        while (j < len2) res.push(right[j++])
        return res
    }
```
用时最少解2 快速排序
```javascript
    function quickSort(arr, left, right) {
        if (left < right) {
            let splitIndex = findSplitIndex(arr, left, right);
            quickSort(arr, left, splitIndex - 1);
            quickSort(arr, splitIndex + 1, right);
        }
    }
    // 查找分割值索引
    function findSplitIndex(arr, left, right) {
        const start = left;
        const splitValue = arr[start];
        while (left < right) {
            while (left < right && arr[right] > splitValue) {
                right--;
            }
            while (left < right && arr[left] <= splitValue) {
                left++;
            }
            swap(arr, left, right);
        }
        swap(arr, start, left);
        return left;
    }
    // 交换位置：左右交换、分割点与left交换
    function swap(arr, i, j) {
        const temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
```
内存最少解
```JavaScript
    var sortArray = function (nums) {
        for (let i = 0; i < nums.length - 1; i++) {
            for (let j = 0; j < nums.length - i - 1; j++) {
                if (nums[j] > nums[j + 1]) {
                    const x = nums[j];
                    nums[j] = nums[j + 1];
                    nums[j + 1] = x;
                }
            }
        }
        return nums;
    };
```