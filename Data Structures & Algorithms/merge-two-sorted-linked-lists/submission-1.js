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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {


        if(!list1) return list2
        if(!list2) return list1
        let new_list = new ListNode(0);

        let list_one = list1;
        let list_two = list2;
        let temp = new_list;

        while (list_one && list_two) {
            if (list_one.val <= list_two.val) {
                temp.next = new ListNode(list_one.val);
                temp = temp.next;
                list_one = list_one.next;
            } else {
                temp.next = new ListNode(list_two.val);
                temp = temp.next;
                list_two = list_two.next;
            }
        }

        if (list_one) {
            while (list_one) {
                temp.next = new ListNode(list_one.val);
                temp = temp.next;
                list_one = list_one.next;
            }
        }
        if (list_two) {
          while(list_two){
              temp.next = new ListNode(list_two.val);
            temp = temp.next;
            list_two = list_two.next;
          }
        }

        new_list = new_list.next;
        return new_list;
    }
}
