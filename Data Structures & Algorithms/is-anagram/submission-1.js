class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length != t.length) return false

        let map1 = new Map()  // for s
        let map2 = new Map()  // for t 

        for (let i = 0; i < s.length; i++) {

            if (map1.has(s[i])) {
                map1.set(s[i], map1.get(s[i]) + 1)
            }
            else {
                map1.set(s[i], 1)
            }

            if (map2.has(t[i])) {
                map2.set(t[i], map2.get(t[i]) + 1)
            }
            else {
                map2.set(t[i], 1)
            }


        }

        
        for(let [key,value]of map1){
            if(!map2.has(key))return false
             if(map2.get(key)!=value)return false 
        }
        for(let [key,value]of map2){
            if(!map1.has(key))return false
             if(map1.get(key)!=value)return false 
        }


        return true 



    }
}
