class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0
        let j = s.length - 1

        while (i < j) {


            let isAlphabetic = /^[A-Za-z0-9]/.test(s[i]);
            while (i < j && !isAlphabetic) {
                i++
                isAlphabetic = /^[A-Za-z0-9]/.test(s[i]);
            }
            
            let isAlphabetic2 = /^[A-Za-z0-9]/.test(s[j]);
            while (i < j && !isAlphabetic2) {
                j--
                isAlphabetic2 = /^[A-Za-z0-9]/.test(s[j]);
            }



            if (s[i].toLowerCase() != s[j].toLowerCase()) return false
            i++
            j--
        }
        return true
    }
}
