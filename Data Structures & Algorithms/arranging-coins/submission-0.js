class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    arrangeCoins(n) { let i = 1
    let j = n

    let ans = 0

    while (i <= j) {
        let mid = Math.floor((i + j) / 2)

        let coinused = mid * (mid + 1) / 2

        if (coinused == n) return mid

        if (coinused < n) {
            ans = mid;     // This is a valid number of rows, save it
            i = mid + 1;
        }
        else {
            j = mid - 1
        }
    }
    return ans}
}
