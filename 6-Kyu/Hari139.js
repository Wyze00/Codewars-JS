// Group Repeating Fractions (410)

function repeatingFractions(numerator, denominator) {

    const frac = (numerator / denominator).toString();
    let res = "";

    if(frac.indexOf(".") == -1) return frac;

    res += frac.slice(0, frac.indexOf(".")+1);

    for(let i = frac.indexOf(".")+1; i<frac.length; i++){
        
        if(frac[i] != frac[i+1]){
            res += frac[i];
            continue
        } 

        let ctr = 1;
        while(frac[++i] == frac[i-1]) ctr++;
        res += `(${frac[--i]})`;
    }

    return res;
}

// What will be the odd one out? (411)

function oddOneOut(str) {

    const res = [];
    let myMap = new Map();

    for(let i = str.length-1; i>-1; i--){

        if(myMap.has(str[i])){
            myMap.set(str[i], myMap.get(str[i]) + 1);
        } else {
            myMap.set(str[i], 1);
        }       
    }

    myMap = [...myMap];

    for(let i = 0; i<myMap.length; i++){
        if(myMap[i][1] % 2 == 1){
            res.unshift(myMap[i][0]);
        }
    }

    return res;
}

// Anything to integer (412)

function toInteger(n) {
    return ~~n
}