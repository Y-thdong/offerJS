// .----------------.  .----------------.  .----------------. 
// | .--------------. || .--------------. || .--------------. |
// | |  ____  ____  | || |  ________    | || |  _________   | |
// | | |_   ||   _| | || | |_   ___ `.  | || | |  _   _  |  | |
// | |   | |__| |   | || |   | |   `. \ | || | |_/ | | \_|  | |
// | |   |  __  |   | || |   | |    | | | || |     | |      | |
// | |  _| |  | |_  | || |  _| |___.' / | || |    _| |_     | |
// | | |____||____| | || | |________.'  | || |   |_____|    | |
// | |              | || |              | || |              | |
// | '--------------' || '--------------' || '--------------' |
//  '----------------'  '----------------'  '----------------' 

// let board = [
//         ["A", "B", "C", "E"],
//         ["S", "F", "C", "S"],
//         ["A", "D", "E", "E"]
//     ],
//     word = "ABCCED";

// // let exist = function (board, word) {
// //     let pos = [];
// //     for (let i = 0; i < board.length; i++) {
// //         let temp = board[i].indexOf(word[0]);
// //         if (temp != -1) {
// //             pos.push([i, temp]);
// //             // 至此根据位置开始一次一次判断
// //             temp = word[j]; //temp代表当前查找的字母

// //         }
// //     }


// //     pos = [];
// // }

// // };
// // console.log(exist(board, word));

// let exist = function (board, word) {
//     let row = board.length;
//     // 默认是二维矩阵
//     let col = board[0].length;

//     let dfs = function (i, j, board, word, index) {
//         if (i < 0 || i >= row || j < 0 || j > col || board[i][j] !== word[index]) return false; // 判断不符合条件
//         if (index === word.length - 1) return true; // word遍历完了
//         let tmp = board[i][j]; // 记录到board的值
//         board[i][j] = '-' // 锁上，因为后续的递归是4个方向上的，无法保证上一个方向的值
//         let res = dfs(i - 1, j, board, word, index + 1) || dfs(i + 1, j, board, word, index + 1) || dfs(i, j - 1, board, word, index + 1) || dfs(i, i, board, word, index + 1);
//         board[i][j] = tmp; // 恢复现场
//         return res;

//     }

//     // 遍历整个board，找到初始位置点
//     for (let i = 0; i < row; i++) {
//         for (let j = 0; j < col; j++) {
//             if (dfs(i, j, board, word, 0)) return true;
//         }
//     }
//     // 没找到
//     return false
// };
// console.log(exist(board, word));
let arr = [0, 1, 2, 4, 8, 10, 11, 12, 13, 16, 17, 18, 18];

function chaosArray (nums) {
    nums.sort(function (a, b) {
        return Math.random() - 0.5;
    });
    return nums;
}
chaosArray(arr);
console.log(arr);
function sortArray (nums) {
    function quicksort (left, right) //传入两个哨兵
    {
        var key = nums[left], //定义基准数key
            i = left, //0
            j = right, //2
            t;
        if (left > right) return; //当传入哨兵错误会结束当前函数
        while (i != j) //哨兵还未相遇继续执行循环
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
        console.log(nums[left] + "  " + nums[i]);
        nums[left] = [nums[i], nums[i] = nums[left]][0]; //此时哨兵相遇，交换基准数与哨兵的值
        quicksort(left, i - 1);
        quicksort(i + 1, right);
    }
    quicksort(0, nums.length - 1);
    return nums;
}
console.log(sortArray(arr));