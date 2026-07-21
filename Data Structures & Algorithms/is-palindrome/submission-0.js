class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // Convert everything to lowercase upfront to save half the work
        s = s.toLowerCase(); 

        let i = 0;
        let j = s.length - 1;

        while (i <= j) {
            let codeI = s.charCodeAt(i);

            // Check if character 'i' is NOT a lowercase letter (97-122) AND NOT a number (48-57)
            if (!(codeI >= 97 && codeI <= 122) && !(codeI >= 48 && codeI <= 57)) {
                i++;
                continue; 
            }

            let codeJ = s.charCodeAt(j);

            // Check if character 'j' is NOT a lowercase letter (97-122) AND NOT a number (48-57)
            if (!(codeJ >= 97 && codeJ <= 122) && !(codeJ >= 48 && codeJ <= 57)) {
                j--;
                continue; 
            }

            // If both are valid alphanumeric characters, compare them
            if (s[i] !== s[j]) {
                return false;
            }

            i++;
            j--;
        }

        return true;
    }
}