class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(!s || !t)return false

        if(s.length != t.length) return false 

        let map =new Map()

        for(let char of s){
            if(map.has(char)){
                map.set(char,map.get(char)+1)
            }
            else {
                map.set(char,1)
            }
        }

        let map2 =new Map()
        for(let char of t){
            if(map2.has(char)){
                map2.set(char,map2.get(char)+1)
            }
            else {
                map2.set(char,1)
            }
        }
     
        for( let k of map.keys()){

            if(map2.has(k)){
                if(map2.get(k)!=map.get(k)) return false 

            }else{
                return false 
            }
        }

        return true 
    }
}
