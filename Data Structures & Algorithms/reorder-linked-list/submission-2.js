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

        // let divdde list
        let main=head
        let slow=head
        let fast=head

        while(fast && fast.next){
            slow=slow.next
            fast=fast.next.next
        }

        // now we have two list

        let List_two_head=slow.next
        slow.next=null

        // now reverse the second list
        let cur=List_two_head
        let prev=null
        let next

        while(cur){
            next=cur.next
            cur.next=prev
            prev=cur
            cur=next
        }

        // now prev is head of new revsr list 2

        let t1=main
        let t2=prev

        while(t2){
            let m1=t1.next
            let m2=t2.next

            t2.next=m1
            t1.next=t2
            
            t1=m1
            t2=m2
        }
        return main
    }
}
