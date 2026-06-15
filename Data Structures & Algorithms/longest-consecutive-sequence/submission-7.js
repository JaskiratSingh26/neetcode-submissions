class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {


if(nums.length==0 ) return 0
if(nums.length==1) return 1
        let map = new Map()

        for(let num of nums ){
             if(!map.has(num)){
                map.set(num,false )
             }
        }

        let Ans=-Infinity
        for(let num of nums ){

            if(map.get(num)==true) continue

            map.set(num,true)
         let count=1
            let nextnum=num+1
            // forwad
            while(map.has(nextnum) && map.get(nextnum)==false){
                count++
                map.set(nextnum,true)
                nextnum++
            }

     
            // set count =1 and backward
          let prevnum = num - 1;
            while (map.has(prevnum) && map.get(prevnum) == false) {
                count++;
                map.set(prevnum, true);
                prevnum--;
            }







              Ans=Math.max(Ans,count)

        }

              return Ans


    }
}
