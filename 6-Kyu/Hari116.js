// #6 Matrices: How Many Matrices Do These Elements Produce?(369)

function countPerms(matrix) {

    let perm = factorial(matrix.length*matrix[0].length);

    const obj = {};

    matrix.forEach((e) => {

        e.forEach((el) => {

            if(obj[el]){
                obj[el]++;
            } else {
                obj[el] = 1;
            }
        })
    })

    for(num in obj){
        perm /= factorial(obj[num]);
    }

    return Math.floor(perm);

    function factorial(n){
        if(n == 1){return 1};

        return n * factorial(n-1);
    }
}
// #1 Sequences: Pure Even Digit Perfect Squares (P.E.D.P.S) (370)

function evenDigitSquares(a, b) {

    const result = [];

    for(let i = Math.ceil(Math.sqrt(a)); i * i <= b; i++){

        if(i % 2 != 0){
            continue;
        } else {

            const num1 = String(i * i).split('');

            if(num1.length == num1.filter((e) => e%2 == 0).length){

                result.push(i * i);
                
            } else {
                continue;
            }
        }
    }

    return result;
}