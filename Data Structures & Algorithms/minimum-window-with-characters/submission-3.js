class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
 if (s.length < t.length) return ""
        let count = t.length
        let min = Infinity
        let starti = 0
        let map = new Map()

        for (let ch of t) {
            if (map.has(ch)) {
                map.set(ch, map.get(ch) + 1)
            }
            else {
                map.set(ch, 1)
            }
        }


        let i = 0
        let j = 0

        while (j < s.length) {
            if (map.has(s[j])) {
                if (map.get(s[j]) > 0) count--
                map.set(s[j], map.get(s[j]) - 1)
            }




            while (count == 0) {
                //window shriinh and find cur len
                let cur = j - i + 1

                if (min > cur) {
                    min = cur
                    starti = i
                }

                if (map.has(s[i])) {
                    map.set(s[i], map.get(s[i]) + 1)
                    if (map.get(s[i]) > 0) count++
                }

                i++
            }



            j++

        }

      
        // Use start_i and min to extract the correct substring
        return min === Infinity ? "" : s.slice(starti, starti + min);


    }
}
