class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let map = new Map()

        for (let str of strs) {
            let sort = str.split('').sort().join("")

            if (map.has(sort)) {
                let arr = map.get(sort)
                arr.push(str)
                map.set(sort, arr)
            }
            else {
                map.set(sort, [str])
            }
        }

        let ans = []

        for (let [index, value] of map) {
         
         ans.push(value)
        }

        return ans 
    }
}
