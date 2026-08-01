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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists.length == 0) return null
        let head = lists[0]

        for (let i = 1; i < lists.length; i++) {

            head = merge(head, lists[i])
        }

        return head
    }
}
function merge(first, second) {
    let dummy = new ListNode(0)
    let cur = dummy

    while (first && second) {


        if (first.val <= second.val) {
            cur.next = new ListNode(first.val)
            first = first.next
        }
        else {
            cur.next = new ListNode(second.val)
            second = second.next
        }

        cur = cur.next


    }

    if (first) {
        while (first) {
            cur.next = new ListNode(first.val)
            first = first.next
            cur = cur.next
        }

    }
    if (second) {
        while (second) {
            cur.next = new ListNode(second.val)
            second = second.next
            cur = cur.next
        }
    }

    return dummy.next

}
