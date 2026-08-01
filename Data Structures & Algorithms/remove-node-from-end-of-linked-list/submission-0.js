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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let len = 0
        let cur = head
        while (cur) {
            len++
            cur=cur.next
        }

        // we got the len off linked list
        let list_to_be_removed = len - n

        if (list_to_be_removed == 0 && !head.next) return null
        if(list_to_be_removed==0) return head.next

            cur = head
        let count = 0
        while (cur) {

            if (count + 1 == list_to_be_removed) {
                cur.next = cur.next.next
            }
            count++
            cur = cur.next
        }

        return head
    }
}
