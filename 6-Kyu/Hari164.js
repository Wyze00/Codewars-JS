// * Sorted Arrays (432)

function nthSmallest(arr, n) {

    const res = [];

    for(let i = 0; i<arr.length; i++){
        check(arr[i]);
    }   

    function check(el){

        if(typeof el == 'object'){

            for(let i = 0; i<el.length; i++){
                check(el[i]);
            }

        } else {
            res.push(el);
        }
    }

    return res.sort((a,b)=>a-b)[n-1];
}

function nthSmallest(...arg) {

    const res = [];
    for(let i = 0; i<arg.length-1; i++){
        res.push(...arg[i]);
    }

    return res.sort((a,b)=>a-b)[arg[arg.length-1]-1];
}
