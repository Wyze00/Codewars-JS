// Complete Fibonacci Series (409)

function fibonacci(n) {

    if(n <= 0) return [];
    if(n == 1) return [0];
    if(n == 2) return [0, 1];

    const res = Array(n);
    res[0] = 0, res[1] = 1;

    for(let i = 2; i<res.length; i++){
        res[i] = res[i-1] + res[i-2];
    }

    return res;
}