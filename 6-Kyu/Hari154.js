// * range `literals` (432)

function range(str, func, mult) {

    let match = str[0].match(/^\d+(:\d+)?$/);

    if(!match || mult || (func && typeof func != 'function')) return [];
    
    const res = [];
    match = match[0];

    if(match.includes(":")){

        const f = Number(match.slice(0, match.indexOf(":")));
        const l = match.slice(match.indexOf(":")+1, match.length);

        for(let i = f; i<=l; i++) res.push(i);
        if(func) return res.filter((e) => func(e));
        return res;

    } else {

        for(let i = 0; i<=match; i++) res.push(i);
        if(func) return res.filter((e) => func(e));
        return res;
    }
}