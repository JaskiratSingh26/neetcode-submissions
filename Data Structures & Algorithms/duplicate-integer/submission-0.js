class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = new Map()

        for (let data of nums) {
            if (map.has(data)) return true
            map.set(data)
        }

        return false 
    }
}
