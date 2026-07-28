class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            let m = Math.floor((l + r) / 2);
            let mid_value = nums[m];

            if (mid_value == target) return m;
            else if (nums[l] <=mid_value) {
                // left part sorted

                if (target >= nums[l] && target < mid_value) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            } else {
                if (target > mid_value && target <= nums[r]) {
                    l = m + 1;
                } else {
                    r = m - 1;
                }
            }
        }
        return -1;
    }
}
