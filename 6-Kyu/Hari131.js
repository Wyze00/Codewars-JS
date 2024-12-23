// Array Calculator (397)

function evaluate(arr){

    for(let i = 0; i<arr.length; i++){

        if(i % 2 == 0 && isNaN(arr[i])) return undefined;
        else if(i % 2 == 1 && !isNaN(arr[i])) return undefined;
        
    }

    if(isNaN(arr[arr.length-1])) return undefined;

    let multiple = true;
    while(multiple){
        multiple = false;

        for(let i = 0; i<arr.length; i++){

            if(arr[i] == '*'){
                arr.splice(i-1,3,arr[i-1]*arr[i+1]);
                multiple = true;
                break;
            }
        }
    }

    let add = true;
    while(add){
        add = false;

        for(let i = 0; i<arr.length; i++){

            if(arr[i] == '+'){
                arr.splice(i-1,3,~~arr[i-1]+~~arr[i+1]);
                add = true;
                break;
            }
        }
    }

    return arr[0];
}

// Each n-th element of list (398)

function each(n, xs) {

    if(n == 0) return [];
    if(n < 0){
        n = Math.abs(n);
        xs.reverse();
    }

    const res = [];

    for(let i = n-1; i<xs.length; i+=n){
        res.push(xs[i]);
    }

    return res
}