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
     * @return {number[][]}
     */
    levelOrder(root) {
        let ans = []
        if(!root) return []

        let queue = [root]

        let n
        while (queue.length != 0) {
            let subarr = []
            let size = queue.length

            for (let i = 0; i < size; i++) {
                 n=queue.shift()
                 subarr.push(n.val)

                 if(n.left) queue.push(n.left)
                 if(n.right) queue.push(n.right)
            }
            ans.push(subarr)

        }
        return ans 

    }
}
