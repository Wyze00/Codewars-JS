// * Character counts (434)

/**
 * Returns the number of times the given character appears in the string,
 * or if more than one character is supplied an array of character counts.
 */
String.prototype.characterCount = function (charsToCount) {
    
    if(!charsToCount) return undefined;

    const cache = {};

    for(let i = 0; i<this.length; i++){

        if(cache[this[i]]){
            cache[this[i]]++;
        } else {
            cache[this[i]] = 1;
        }
    }

    if(charsToCount.length == 1) return cache[charsToCount];

    const res = [];
    for(let i = 0; i<charsToCount.length; i++){
        res.push(cache[charsToCount[i]] || 0);
    }

    return res;
};