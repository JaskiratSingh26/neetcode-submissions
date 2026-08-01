class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {

        s = s.trim()

        let count = 0

        for (let i = s.length-1; i >= 0; i--) {

            if (s[i] == ' ') {
                return count
            
            }
          else {
            count++
          }
        }
        return count
   
    }
}
