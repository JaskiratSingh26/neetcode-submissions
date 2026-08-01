class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {


        let i = 0
        let j = 0

        let newS = ''

        while (i < word1.length && j < word2.length) {
            newS += word1[i]
            newS += word2[j]
            i++
            j++
        }

        if (i == word1.length ) { newS += word2.slice(j) }
        else newS += word1.slice(i)

        return newS

    }


}
