class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let map =new Map()
        for (let num of nums ){
            if(map.has(num)){
                map.set(num,map.get(num)+1)
            }
            else{
                map.set(num,1)
            }
        }

        // sort map
        let sorted_map=new Map([...map].sort((a,b)=>b[1]-a[1]))
        let ans =[]
        for (let num of sorted_map.keys() ){

            if(k==0) return ans 

            ans.push(num)
            k--
        }

        return ans
    }
}
