// * Challenge Fun #17: Merge Arrays (435)

function mergeArrays(a, b) {    
   
    const obj1 = {};
    const obj2 = {};

    for(const num of a){

        if(obj1[num]){
            obj1[num]++;
        } else {
            obj1[num] = 1;
        }
    }

    for(const num of b){
        if(obj2[num]){
            obj2[num]++;
        } else {
            obj2[num] = 1;
        }
    }

    const res = [];

    for(const k in obj1){

        if(obj2[k]){
            if(obj1[k] == obj2[k]) res.push(Number(k));
        } else {
            res.push(Number(k));
        }
    }

    for(const k in obj2){
        if(!obj1[k]) res.push(Number(k));
    }
    

    return res.sort((a,b)=>a-b);
}