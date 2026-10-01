class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if(digits === "")
            return []
        let letterMap = {
            '2':'abc',
            '3':'def',
            '4':'ghi',
            '5':'jkl',
            '6':'mno',
            '7':'pqrs',
            '8':'tuv',
            '9':'wxyz'
        }
        let result = []

        const backtrack = (index, currentBatch)=>{
            if(currentBatch.length === digits.length){
                result.push(currentBatch.join(''))
                return
            }
            for(let letter of letterMap[digits[index]]){
                currentBatch.push(letter)
                backtrack(index+1, currentBatch)
                currentBatch.pop()
            }
        }
        backtrack(0, [])
        return result
    }
}
