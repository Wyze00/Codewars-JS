// Josephus Permutation (354)

function josephus(items,k){

    let cur = (k-1) % items.length;

    const res = [];

    while(items.length != 0){
        res.push(...items.splice(cur,1))
        cur = (cur + k-1) % items.length;
    }

    return res;
}

