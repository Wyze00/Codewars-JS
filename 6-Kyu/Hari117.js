// Count words (371)

function wordCount(s) {
  return s.split(/[^A-Za-z]/).filter((e) => !e.match(/\b(a|the|on|at|of|upon|in|as)\b/gi) && e).length;
}

// Simple Fun #218: Replace Words (372)

function replaceWords(sentence) {

    sentence = sentence.split(' ');
    const sorted  = sentence.concat().sort((a,b) => a.length-b.length);
    const res = new Array(sentence.length);

    for(let i = 0, j = sentence.length-1; i<sentence.length; i++, j--){
        res[sentence.indexOf(sorted[i])] = sorted[j] == 'I' ? 'I' : sorted[j].toLowerCase();
    }

    res[0] = res[0][0].toUpperCase()+res[0].slice(1)
    return res.join(' ')
}


// Square into Squares. Protect trees! (373)


function decompose(n) {

    const aja = [];

    for (let i = n - 1; i > 0; i--) {
        const arr = [i];

        if (another(Math.floor(Math.sqrt(n ** 2 - i ** 2)), (n ** 2 - i ** 2), arr.concat())) {
            return aja[0];
        }
    }

    return null;

    function another(n, rem, arr) {
        if (rem === 0) {
            aja.push(arr);
            return true; 
        }

        for (let i = n; i > 0; i--) {

            if (arr.includes(i) || arr[0] < i) {
                break;
            }

            const temp = arr.concat();
            temp.unshift(i);

            if (another(Math.floor(Math.sqrt(rem - i ** 2)), (rem - i ** 2), temp)) {
                return true; 
            }
        }
        return false; 
    }
}
