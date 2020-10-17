// let board = [
//         ["A", "B", "C", "E"],
//         ["S", "F", "C", "S"],
//         ["A", "D", "E", "E"]
//     ],
//     word = "ABCCED";

// // var exist = function (board, word) {
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

// var exist = function (board, word) {
//     var row = board.length;
//     // 默认是二维矩阵
//     var col = board[0].length;

//     var dfs = function (i, j, board, word, index) {
//         if (i < 0 || i >= row || j < 0 || j > col || board[i][j] !== word[index]) return false; // 判断不符合条件
//         if (index === word.length - 1) return true; // word遍历完了
//         var tmp = board[i][j]; // 记录到board的值
//         board[i][j] = '-' // 锁上，因为后续的递归是4个方向上的，无法保证上一个方向的值
//         var res = dfs(i - 1, j, board, word, index + 1) || dfs(i + 1, j, board, word, index + 1) || dfs(i, j - 1, board, word, index + 1) || dfs(i, j + 1, board, word, index + 1);
//         board[i][j] = tmp; // 恢复现场
//         return res;

//     }

//     // 遍历整个board，找到初始位置点
//     for (var i = 0; i < row; i++) {
//         for (var j = 0; j < col; j++) {
//             if (dfs(i, j, board, word, 0)) return true;
//         }
//     }
//     // 没找到
//     return false
// };
// console.log(exist(board, word));

