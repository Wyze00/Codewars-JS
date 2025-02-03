// * Permute a Palindrome (439)

function permuteAPalindrome (input) { 

    const alp = Array(26).fill(0);

    for(let i = 0; i<input.length; i++){
        alp[input[i].toLowerCase().charCodeAt(0) - 97]++;
    }
    
    let odd = 0;
    let even = 0;
    for(let i = 0; i<alp.length; i++){

        if(!alp[i]) continue;

        if(alp[i] % 2 == 0) even++
        else odd++;
    }

    return odd <= 1;
}