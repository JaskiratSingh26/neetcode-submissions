class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let i = 0
        let j = heights.length - 1
        let max = 0
        while (i < j) {

          let w=j-i
          let ht=Math.min(heights[i],heights[j])
          let aera=w*ht
          max=Math.max(aera,max)

          if(heights[i]<heights[j]){
            i++
          }
          else{
            j--
          }
        }

        return max 
    }
}
