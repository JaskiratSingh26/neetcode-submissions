class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        if (nums[0] > target) return 0
        if (nums[nums.length - 1] < target) return nums.length
        let l = 0
        let h = nums.length - 1

        while (l <= h) {
            let mid = Math.floor((l + h) /2 )
            if (nums[mid] == target) return mid

            else if (nums[mid] < target && nums[mid + 1] > target) return mid + 1
            else if (nums[mid] > target && nums[mid - 1] < target) return mid 

            else if(nums[mid]<target) l=mid+1
            else h=mid-1

        }
        return l
    }
}
