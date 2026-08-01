class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {

        let map = new Map()

        let j = 0
        let i = 0

        while (j < nums.length) {
            if (Math.abs(i - j) <= k) {
                if (map.has(nums[j])) return true
                else {
                    map.set(nums[j], 0)
                    j++
                }
            }
            else{
                map.delete(nums[i])
                i++
            }
        }

        return false 
    }
}
