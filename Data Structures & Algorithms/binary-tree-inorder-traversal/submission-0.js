/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    inorderTraversal(root) {
        let ans = []
        let stack = []
        let node = root

        while (stack.length > 0 || node) {
            if (node) {
                stack.push(node)
                node = node.left
            }
            else {
                node = stack.pop()
                ans.push(node.val)
                node = node.right
            }



        }

        return ans

    }
}
