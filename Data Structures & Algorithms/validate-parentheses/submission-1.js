class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        let stack = []

        for (let el of s) {

            if (el == ']') {
                if (stack[stack.length - 1] == '[') {
                    stack.pop()
                }
                else{
                    stack.push(el)
                }

            }

            else if (el == '}') {
                if (stack[stack.length - 1] == '{') {
                    stack.pop()
                }
                 else{
                    stack.push(el)
                }
            }

            else if (el == ')') {
                if (stack[stack.length - 1] == '(') {
                    stack.pop()
                }
                 else{
                    stack.push(el)
                }
            }



            else {
                stack.push(el)
            }


        }

        return stack.length > 0 ? false : true
    }
}
