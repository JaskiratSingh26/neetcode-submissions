/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let rabit = head;
        let turtle = head;

        while (rabit && rabit.next && turtle && turtle.next && turtle.next.next) {
            rabit = rabit.next;
            turtle = turtle.next.next;

            if(rabit == turtle) return true 
        }

        return false 
    }
}
