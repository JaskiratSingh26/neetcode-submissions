class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        if(s.length==1 && s=='}'|| s==']'|| s==')') return false 
        for (let item of s) {
            if (item == "[" || item == "{" || item == "(") {
                stack.push(item);
            }

            if (item == "]") {
                if (stack[stack.length - 1] == "[") stack.pop();
                else stack.push(item);
            } else if (item == "}") {
                if (stack[stack.length - 1] == "{") stack.pop();
                else stack.push(item);
            } else if (item == ")") {
                if (stack[stack.length - 1] == "(") stack.pop();
                else stack.push(item);
            }
        }

        return stack.length == 0;
    }
}
