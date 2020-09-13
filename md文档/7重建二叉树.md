### [剑指 Offer 07\. 重建二叉树](https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/)

Difficulty: **中等**


输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

例如，给出

```
前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
```

返回如下的二叉树：

```
    3
   / \
  9  20
    /  \
   15   7
```

**限制：**

`0 <= 节点个数 <= 5000`

**注意**：本题与主站 105 题重复：


#### Solution

Language: **JavaScript**

我的解
```JavaScript
    var buildTree = function (pre, ino) {
        if (pre.length == 0 || ino.length == 0) {
            return null;
        };
        let root = pre[0];
        let index = ino.indexOf(root);
        let leftTree = ino.slice(0, index);
        let RightTree = ino.slice(index + 1);
        return {
            // 当前节点
            val: pre[0],
            //递归左右子树的前序，中序
            left: buildTree(pre.slice(1, index + 1), leftTree),
            right: buildTree(pre.slice(index + 1), RightTree)
        };
    };
```
