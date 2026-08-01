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
     * @return {void}
     */
    reorderList(head) {

        let slow = head
        let fast = head
        let Cur = head
        let Mainhead = head
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }

        //  Reversed started
        let Mid = slow.next
        slow.next = null
       

        let temp
        let prev = null

        while (Mid) {
            temp = Mid.next
            Mid.next = prev
            prev = Mid
            Mid = temp

        }


        //reversed done  head is Prev
        let firstTemp
        let MidTemp

        while (prev) {
            firstTemp = Cur.next
            MidTemp = prev.next

            Cur.next = prev
            prev.next = firstTemp

            Cur = firstTemp
            prev = MidTemp

        }
    }
}
