// Bit calculator (406)

function calculate(num1,num2){

    let res = 0;

    for(let i = num1.length-1, power = 0; i>-1; i--, power++) res += num1[i] * 2 ** power;
    for(let i = num2.length-1, power = 0; i>-1; i--, power++) res += num2[i] * 2 ** power;
    
    return res;
}

// One Line : Bit Calculator

calculate=(a,b)=>+`0b${a}`+ +`0b${b}`