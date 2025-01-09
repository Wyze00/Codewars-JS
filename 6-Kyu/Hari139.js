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