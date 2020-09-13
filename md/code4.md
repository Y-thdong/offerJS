### [剑指 Offer 04\. 二维数组中的查找](https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/)

Difficulty: **简单**


在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

**示例:**

现有矩阵 matrix 如下：

```
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
```

给定 target = `5`，返回 `true`。

给定 target = `20`，返回 `false`。

**限制：**

`0 <= n <= 1000`

`0 <= m <= 1000`

**注意：**本题与主站 240 题相同：


#### Solution

Language: **JavaScript**

我的解
```JavaScript
    // 又臭又长
    var findNumberIn2DArray = function (matrix, target) {
        let temp1 = false,
            temp2 = matrix["length"] == 0 ? 1 : !(matrix[0].hasOwnProperty('length')) ?
            (!(matrix[0].hasOwnProperty('length')) ? 2 : 3) : 4;
        if (temp2 == 1) {
            // console.log("空数组");
            return temp1;
        } else if (temp2 == 2) {
            // console.log("一维数组");
            // let row = matrix[0].length; //0
            for (let i = 0; i < matrix.length; i++) {
                if (target == matrix[i]) {
                    temp1 = true;
                    break;
                }
            }
        } else {
            // console.log("二维数组");
            let row = 0,
                col = matrix[0].length - 1;
            while (col != -1 && row != matrix.length) {
                if (target > matrix[row][col]) {
                    row++;
                    continue;
                }
                if (target < matrix[row][col]) {
                    col--;
                    continue;
                }
                if (target == matrix[row][col]) {
                    // return true;
                    temp1 = true;
                    break;
                }
            }
        }
        return (true == temp1);
    };
```
用时最少解
```JavaScript
    var findNumberIn2DArray = function (matrix, target) {
        if (matrix.length === 0 || matrix[0].length === 0) return false;
        let row = 0,
            rows = matrix.length,
            cols = matrix[0].length,
            col = cols - 1,
            cur;
        while (row < rows && col >= 0) {
            cur = matrix[row][col];
            if (cur > target) {
                col--;
            } else if (cur < target) {
                row++;
            } else {
                return true;
            }
        }
        return false;
    };
```
内存最少解
```JavaScript
    var findNumberIn2DArray = function (matrix, target) {
        let n = matrix.length;
        let m = matrix[0] && matrix[0].length || 0;
        let row = n - 1;
        while (true) {
            if (row < 0) return false;
            if (target < matrix[row][0]) {
                row--;
            } else {
                for (let i = 0; i < m; i++) {
                    let v = matrix[row][i];
                    if (target == v) {
                        return true;
                    } else if (target < v) {
                        break;
                    }
                }
                row--;
            }
        }
    };
```