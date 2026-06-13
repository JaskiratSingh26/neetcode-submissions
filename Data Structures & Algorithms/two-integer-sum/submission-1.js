class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();

        for (let num in nums) {

            let cur=nums[num]
            let find=target-cur

            if(map.has(find)){
                return[Number(num),Number(map.get(find))]
            }
           
            map.set(nums[num], num);
        }
        return []
    }
}
