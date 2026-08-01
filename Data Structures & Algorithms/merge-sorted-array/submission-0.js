class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {


        let arr = []
        let i = 0
        let j = 0

      
        while (i <m && j < n) {

            if (nums1[i] < nums2[j]) {
                arr.push(nums1[i])
                i++
            }
            else {
                arr.push(nums2[j])
                j++
            }
        }


       while (i < m) {
            arr.push(nums1[i]);
            i++;
        }

        // If nums2 still has elements left
        while (j < n) {
            arr.push(nums2[j]);
            j++;
        }

        for (let x = 0; x < arr.length; x++) {
            nums1[x] = arr[x];
        }



    }
}
