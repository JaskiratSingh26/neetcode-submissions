class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0;
        let j = s.length - 1;

        while (i <= j) {
            let char_code = s.charCodeAt(i);
            
            // Check if s[i] is NOT alphanumeric
            if (
                !(
                    (char_code >= 65 && char_code <= 90) ||
                    (char_code >= 97 && char_code <= 122) ||
                    (char_code >= 48 && char_code <= 57)
                )
            ) {
                i++;
                continue;
            }

            char_code = s.charCodeAt(j);
            // Check if s[j] is NOT alphanumeric
            if (
                !(
                    (char_code >= 65 && char_code <= 90) ||
                    (char_code >= 97 && char_code <= 122) ||
                    (char_code >= 48 && char_code <= 57)
                )
            ) {
                j--;
                continue;
            }

            // Compare character values case-insensitively
            if (s[i].toLowerCase() !== s[j].toLowerCase()) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}