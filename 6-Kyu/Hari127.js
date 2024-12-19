// Shortest steps to a number (389)

function shortestStepsToNum(num) {

    let ctr = 0;

    while (num != 1){

        if(num % 2 == 0){
            num /= 2;
            ctr ++;
        } else {
            num -= 1;
            ctr++
        }
    }

    return ctr;
}

// Odd-heavy Array (390)

function isOddHeavy(n){

    const odd = n.filter((e) => Math.abs(e) % 2 == 1);
    const even = n.filter((e) => Math.abs(e) % 2 == 0);

    if(odd.length == 0){
        return false
    }

    return odd.every((e) => even.every((g) => e > g));
}
