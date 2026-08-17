class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        if (s.length == 0) return s;
        let i = 0;
        let j = s.length - 1;
        let temp = null;
        while (i <= j) {
           [s[i],s[j]]=[s[j],s[i]]
            i++;
            j--;
        }
        return s;
    }
}
