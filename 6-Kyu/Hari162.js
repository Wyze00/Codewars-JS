// * Identify the array's ordering (430)

function orderType(arr) {
    
    let len = arr.length;
    let inc = 0;
    let dec = 0;
    let con = 0;
    const p = Array(len).fill(0);

    for(let i = 0; i<len; i++){

        let tmp = arr[i];

        if(typeof tmp == 'number'){
            p[i] = String(tmp).length;
        } else {
          p[i] = tmp.length;
        }

        if(i == 0) continue;

        if(p[i] > p[i-1]) inc++
        else if(p[i] < p[i-1]) dec++
        else con++;
    }

    if(con == len-1) return 'Constant'
    else if(inc != 0 && dec != 0) return 'Unsorted'
    else if(inc != 0) return 'Increasing'
    else return 'Decreasing';
}

// * Faro Shuffle Count (431)

function faroCount(deckSize) {
    
    let count = 1;
    let len = deckSize;
    const arr = Array.from({length: deckSize}).map((e,i)=>i+1);
    shuffle();

    while(!arr.every((e,i)=>e==i+1)){
        count++
        shuffle();
    }
    
    function shuffle(){

        const tmp = arr.concat();
        let left = 0;
        let mid = len/2;

        for(let i = 0; i<len;){

            arr[i++] = tmp[left++];
            arr[i++] = tmp[mid++];
        }
    }

    return count;
}

