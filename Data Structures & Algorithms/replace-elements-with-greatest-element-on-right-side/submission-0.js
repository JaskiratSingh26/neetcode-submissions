class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {

        let ans = arr

        let temp
        let max = -1
        for (let i = arr.length -1; i >= 0; i--) {
            temp = arr[i]
            
            ans[i]=max
            max=Math.max(temp,max)



        }
        return ans 
    }
}
