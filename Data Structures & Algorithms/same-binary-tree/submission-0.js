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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {

        let q1 = [p]
        let q2 = [q]
        let n1
        let n2


        while (q1.length != 0 && q2.length != 0) {



            n1 = q1.shift()
            n2 = q2.shift()

            if (!n1 && !n2) continue;

            // 2. One is null, or values don't match? Not the same tree.
            if (!n1 || !n2 || n1.val !== n2.val) return false;
            q1.push(n1.left)
            q2.push(n2.left)
            q1.push(n1.right)
            q2.push(n2.right)




        }

        return true

    }
}
