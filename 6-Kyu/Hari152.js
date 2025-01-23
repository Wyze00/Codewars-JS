// * Simple Fun #165: Withdraw (430)

function withdraw(n) {
    
    const res = [0, 0, 0];
    if(n < 40 || n > 10000) return res;   

    res[0] += Math.floor(n / 100);
    n %= 100;

    if(n === 30 || n === 10){
        n += 50;
        res[0]--;
        res[1]++;
    }

    if(n % 50 % 20 == 0){

        res[1] += Math.floor(n / 50);
        n %= 50;
        res[2] += Math.floor(n/ 20);

    } else {
        res[2] += Math.floor(n / 20);
    }

    return res;
}

