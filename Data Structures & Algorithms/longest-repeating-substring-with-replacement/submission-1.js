class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        let maxlen = 0
        let l = 0
        let r = 0
        let maxfreq = 0
        let map = new Map()

        while (r < s.length) {

            if (map.has(s[r])) {
                map.set(s[r], map.get(s[r]) + 1)
            }

            else {
                map.set(s[r], 1)
            }

            maxfreq = Math.max(maxfreq, map.get(s[r]))

            while (((r - l) + 1) - maxfreq > k) {
                map.set(s[l], map.get(s[l]) - 1)
                l++
            }

            maxlen = Math.max(maxlen, (r - l) + 1)
            r++


        }

        return maxlen
    }
}
