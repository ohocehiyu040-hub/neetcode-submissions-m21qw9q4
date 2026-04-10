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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let globalRecord = 0; 
        const dfs = (node) => {
            if (!node) return 0;

            let leftHeight = dfs (node.left);
            let rightHeight = dfs (node.right);
            let currentDiameter = leftHeight + rightHeight; 
            globalRecord = Math.max(globalRecord, currentDiameter);

            return 1 + Math.max(leftHeight, rightHeight);
        }
        dfs(root);
        return globalRecord;
    }
    
}
