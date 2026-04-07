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
        let slow = head; 
        let fast = head; 

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next; 
        }

        let second = slow.next;
        slow.next = null; 

        let prev = null; 
        let curr = second; 

        while(curr) {
            let next = curr.next;
            curr.next = prev; 
            prev = curr; 
            curr = next; 
        }

        let first = head
        let reversedHead = prev; 

        while (reversedHead) {
            let tmp1 = first.next; 
            let tmp2 = reversedHead.next; 

            first.next = reversedHead; 
            reversedHead.next = tmp1; 

            first = tmp1; 
            reversedHead = tmp2; 
        }

    }
}
