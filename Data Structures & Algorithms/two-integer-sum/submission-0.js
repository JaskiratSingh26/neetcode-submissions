class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let map=new Map()
        let ans=[]

        for(let i=0;i<nums.length;i++){

            let target_value=target-nums[i]

            if(map.has(target_value)){
                ans=[map.get(target_value),i]

            }

            map.set(nums[i],i)
        }

        return ans 
    }
}
