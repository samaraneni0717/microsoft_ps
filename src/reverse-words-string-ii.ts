/**
 Do not return anything, modify s in-place instead.
 */
function reverseWords(s: string[]): void {
    //edge case
    // when no spaces presnt => no words present
    if (s.indexOf(" ") === -1) { return }

    //reverse the whole string
    //reverse each word
    //idea: two pointer one at start and one at end
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        const temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;
    }

    if (s.length < 3) { return }
    //reverse each word
    // two pointer: one slow runner and one fast runner
    let p = 0;
    let q = 1;
    while (q < s.length + 1) {
        if (s[q] !== ' ' && q < s.length) { //last letter
            q++;
        } else {
            const prevPos = q;
            q = q - 1;
            while (p < q) {
                const temp = s[p];
                s[p] = s[q];
                s[q] = temp;
                p++;
                q--;
            }
            p = prevPos + 1;
            q = p + 1;

        }
    }
};

reverseWords(["t", "h", "e", " ", "s", "k", "y", " ", "i", "s", " ", "b", "l", "u", "e"]);