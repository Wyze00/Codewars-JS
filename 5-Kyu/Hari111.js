// Josephus Survivor (359)

function josephusSurvivor(n,k){

    n = Array.from({length: n}).map((e,i) => i+1);

    let cur = (k-1) % n.length;

    while(n.length != 1){
        n.splice(cur,1)
        cur = (cur + k-1) % n.length;
    }

    return n[0]
}