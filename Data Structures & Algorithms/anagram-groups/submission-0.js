class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map =new Map()

        for(let s of strs){
            let sortedS=[...s].sort().join('')

            if(map.has(sortedS)){
                let oldarr=map.get(sortedS)
                oldarr.push(s)
                map.set(sortedS,oldarr)

            }
            else{
                map.set(sortedS,[s])
            }

        }

        let ANS=[]

        for(let arr of map.keys()){
            ANS.push(map.get(arr))
        }
        return ANS
    }
}
