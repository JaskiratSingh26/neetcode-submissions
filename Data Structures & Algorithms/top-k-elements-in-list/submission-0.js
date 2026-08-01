class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let map = new Map()

        for (let num of nums) {

            if (map.has(num)) {

                map.set(num, map.get(num) + 1)
            }
            else {
                map.set(num, 1)
            }
        }

        let sort = [...map.entries()].sort((a, b) => a[1] - b[1])

        let ans = sort.splice(-k)
        let final = []

        for (let data of ans) {

            final.push(data[0])
        }

        return final

    }
}
