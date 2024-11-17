// Primes in numbers (335)

function primeFactors(n){

    if (n <= 3) return `(${n})`;

    if(n % 2 == 0 || n % 3 == 0){return notPrime(n)}
    
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) {return notPrime(n)}
    }

    return `(${n})`;

    function notPrime(n){

        const pr = {};

        let ctr = 2;

        while(n != 1){

            if(ctr % 2 == 0 && ctr != 2){ctr++;continue;}

            let temp = ctr-1;

            while(temp > 0){

                if(ctr % temp == 0 && temp != 1){break;}

                if(temp == 1){

                    while(n % ctr == 0){

                        if(!pr[ctr]){
                            pr[ctr] = 1;
                        } else {
                            pr[ctr]++;
                        }

                        n /= ctr;
                    }
                }
                temp--;
            }
            ctr++;
        }

        let res = "";

        for(let prime in pr){

            if(pr[prime] == 1){
                res += `(${prime})`;
            } else {
                res += `(${prime}**${pr[prime]})`
            }
        }

        return res;
    }
    
}

function primeFactors(n) {
    const factors = {};
    let divisor = 2;

    while (n > 1) {

        let count = 0;

        while (n % divisor === 0) {
            count++;
            n /= divisor;
        }

        if (count > 0) {
            factors[divisor] = count;
        }

        divisor++;
    }

    let res = "";

    for(let prime in factors){

        if(factors[prime] == 1){
            res += `(${prime})`;
        } else {
            res += `(${prime}**${factors[prime]})`
        }
    }

    return res;
}


