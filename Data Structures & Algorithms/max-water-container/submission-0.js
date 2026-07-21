class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {


        let ans=0

        let i=0
        let j=heights.length-1

        while(i<=j){

            let ht=Math.min(heights[j],heights[i])
            let w=j-i

            let water=w*ht

            ans=Math.max(ans,water)

            if(heights[j]<heights[i]) j--
            else i++
        }
        return ans 
    }
}
