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
     * @param {ListNode} headA
     * @param {ListNode} headB
     * @return {ListNode}
     */
    getIntersectionNode(headA, headB) {

        let map = new Map()
        let temp = headA

        while (temp) {
            map.set(temp, 0)
            temp = temp.next
        }

        temp = headB
        while (temp) {
            if (map.has(temp)) return temp

            temp = temp.next
        }



        return null


    }
}
