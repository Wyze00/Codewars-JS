// Numerical Palindrome #3.5 (401)

function palindrome(num){ 

    if(typeof(num) != 'number' || num < 0) return "Not valid";
    if(num <= 10) return "No palindromes found";

    const myA = String(num).split('');
    let res = [];

    if(myA.every(e=>e==myA[0])){
        return Array.from({length: myA.length-1}).map((e,i)=>''.padStart(i+2,myA[0])).map(e=>Number(e));
    }

    for(let i = 0; i<myA.length-1; i++){

        let j;
        let boolean = false;
        let ctr = 0;

        if(myA[i] == myA[i+2]){
            j = i+2;
            boolean = true;
        } else if(myA[i] == myA[i+1]){
            j = i+1;
            boolean = true;
        }

        while(boolean){

            if(i-ctr < 0 || j+ctr > myA.length-1) break;

            boolean = false;
            res.push(myA.slice(i-ctr, j+1+ctr).join(''));
            ctr++;

            if(myA[i-ctr] == myA[j+ctr]){
                boolean = true;
            }
        }
    }

    res = res.sort((a,b) => a-b).filter(e=>e[0]!=0).map(e=>Number(e));
    return res.length == 0 ? "No palindromes found" : [...new Set(res)];
}

// Prefill an Array (402)

function prefill(n, v) {

    if(isNaN(n) || n < 0 || n == Infinity || n == -Infinity ||  n === false || n === true || Math.round(n) !== n) throw new TypeError(`${n} is invalid`);
    n = Number(n);
    
    return Array(n).fill(v) ;
}