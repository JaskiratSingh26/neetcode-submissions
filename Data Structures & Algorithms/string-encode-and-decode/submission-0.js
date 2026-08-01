class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // our ides is to add # in the , and in the decode aread we smiple reverse that
        let encodeStr = "";

        for (let s of strs) {
            encodeStr += s;
            encodeStr += "$^$";
        }
        return encodeStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decodeStr = str.split("$^$");
        decodeStr.pop();
        return decodeStr;
    }
}
