// * Simplify the number! (428)

function simplify(number){

    let res = "";
    number = number.toString();

    for(let i = 0; i<number.length-1; i++){

        if(number[i] === '0') continue;

        res += `${number[i]}*1${'0'.padEnd(number.length-1-i, '0')}+`;
    }

    if(number[number.length - 1] !== '0') return res + number[number.length-1];

    return res.slice(0, -1);
}

// * Multiples of 3 and 5 redux (429)

function solution(number){

    const tU = Math.floor((number-1) / 3);
    const sTU = tU/2 * (tU * 3 + 3);

    const lU = Math.floor((number-1) / 5);
    const sLU = lU/2 * (lU * 5 + 5);

    const lMU = Math.floor((number-1) / 15);
    const sLMU = lMU/2 * (lMU * 15 + 15);

    return sTU + sLU - sLMU;
}
