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
    isPalindrome(head) {
        let arr = []
        let temp = head

        while (temp) {
            arr.push(temp.val)
            temp = temp.next
        }


        let i = 0
        let j = arr.length - 1

        while (i < j) {
            if (arr[i] != arr[j]) {
                return false
            }
            i++
            j--
        }
        return true
    }
}
