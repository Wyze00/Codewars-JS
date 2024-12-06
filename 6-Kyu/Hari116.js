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