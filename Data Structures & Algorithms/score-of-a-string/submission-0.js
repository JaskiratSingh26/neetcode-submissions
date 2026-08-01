class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let score = []
        let ans = 0

        for (let i = 0; i < s.length; i++) {
        score.push(s.charCodeAt(i))
        }


        for(let i=1;i<score.length;i++){
            ans+=Math.abs(score[i]-score[i-1])
        }
        return ans 
    }
}
