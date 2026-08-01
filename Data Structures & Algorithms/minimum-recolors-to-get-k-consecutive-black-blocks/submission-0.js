class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks, k) {

        let i = 0
        let j = 0
        let min = Infinity
        let Count = 0
        while (j < blocks.length) {

 if (blocks[j] == 'W') Count++

            if (((j - i) + 1) == k) {
                min = Math.min(min, Count)
                if (blocks[i] == 'W') Count--
                i++

            }
           

            j++

        }
        return min
    }
}
