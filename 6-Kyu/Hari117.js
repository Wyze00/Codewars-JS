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
