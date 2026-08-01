class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let i = 0
        let j = s.length - 1
        


        while (i <= j) {

            if(s[i]!=s[j]) {
                return check(s,i+1,j) || check(s,i,j-1)
            }

            i++
            j--

        }
        return true 
    }
}

function check(s,i,j){
    while(i<=j){
        if(s[i]!=s[j]) return false
        i++
        j--
    }
    return true 
}
