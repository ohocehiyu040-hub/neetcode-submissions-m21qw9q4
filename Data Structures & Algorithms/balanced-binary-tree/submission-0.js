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
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        const dfs = (node) => {
            if (!node) return 0;

            let leftHeight = dfs(node.left); 
            let rightHeight = dfs (node.right);

            if (leftHeight === -1) return -1
            if (rightHeight === -1) return -1

            return Math.abs(leftHeight - rightHeight) > 1 ? -1 : 1 + Math.max (leftHeight, rightHeight)
        }
        return dfs(root) !== -1 
    }

}
