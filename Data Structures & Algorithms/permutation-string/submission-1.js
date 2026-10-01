class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;
        
        let freqArrayS1 = new Array(26).fill(0)
        let freqArrayS2 = new Array(26).fill(0)

        for(let i=0; i<s1.length;i++){
            freqArrayS1[s1[i].charCodeAt(0)-'a'.charCodeAt(0)]++
            freqArrayS2[s2[i].charCodeAt(0)-'a'.charCodeAt(0)]++
        }

        const matches = (a1, a2) => {
            for(let i=0; i<26; i++){
                if( a1[i] !== a2[i])
                    return false
            }
            return true
        }
        if(matches(freqArrayS1, freqArrayS2))
            return true
        let left = 0    
        //Slide window in s2
        for(let right=s1.length; right<s2.length; right++){
            freqArrayS2[s2[right].charCodeAt(0)-'a'.charCodeAt(0)]++
            freqArrayS2[s2[left].charCodeAt(0)-'a'.charCodeAt(0)]--

            if(matches(freqArrayS1, freqArrayS2))
                return true

            left++
        }
        return false    
    }
}
