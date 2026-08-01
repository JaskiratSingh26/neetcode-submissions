class Solution {
    /**
     * @param {character[]} chars
     * @return {number}
     */
    compress(chars) {

        let ans = []

        for (let i = 0; i < chars.length; i++) {


            let ch = chars[i]
            let count = 0


            while (i < chars.length && chars[i] == ch) {
                count++
                i++
            }
            i--

            let el = String(chars[i]) + String(count)
            if (count == 1) ans.push(String(chars[i]))
            else {
                for (let j = 0; j < el.length; j++) {
                    ans.push(el[j])
                }
            }

        }

      
        for( let i=0;i<ans.length;i++){
            chars[i]=ans[i]
        }
        return ans.length
    }
}
