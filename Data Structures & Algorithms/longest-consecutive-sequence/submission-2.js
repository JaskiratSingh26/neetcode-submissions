class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let map = new Map()

        for (let num of nums) {
            map.set(num, false)
        }
        let maxlen = 0

        for (let num of nums) {
      


            if (map.get(num) == false) {
                  map.set(num,true)
                let nextnum = num+1
                let len = 1

                while (map.has(nextnum) && map.get(nextnum) == false) {
                    len++
                    map.set(nextnum, true)
                    nextnum++

                }

              
 maxlen=Math.max(maxlen,len)
                let prevnum = num-1
                

                while (map.has(prevnum) && map.get(prevnum) == false) {
                    len++
                    map.set(prevnum, true)
                    prevnum--

                }
                maxlen=Math.max(maxlen,len)

            }

        }
        return maxlen
    }
}
