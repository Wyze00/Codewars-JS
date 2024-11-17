// String incrementer (327)

function incrementString (strng) {
    
    const match = strng.match(/(\d+$)/);

    if(!match){
        return strng + 1;
    }   

    return (strng.slice(0,strng.length-match[0].length) + (Number(match[0])+1).toString().padStart(match[0].length,0));
}

// Weight for weight (328)

function orderWeight(strng) {

    const ar = strng.split(' ');

    return ar.sort((a,b) => {

        const wA = (a.split('').reduce((a,c) => a + Number(c),0));
        const wB = (b.split('').reduce((b,c) => b + Number(c),0));

        if(wA == wB){
            return a.localeCompare(b); 
        }

        return wA-wB;
    }).join(' ');
}

var minimumAbsDifference = function(head) {
        
    const max = Math.max(...head);
    const min = Math.min(...head);

    const c = new Array(max-min+1).fill(0);

    for(let i = 0; i<head.length; i++){
        c[head[i]-min]++;
    }

    const sort = [];

    for(let i = 0; i<c.length; i++){
        while(c[i] > 0){

            sort.push(i+min);

            c[i]--;
        }
    }

    const pair = [];

    const mins = sort[0] < 0 ? Math.abs(sort[1] - sort[0]) : sort[1] - sort[i];
    

    for(let i = 0; i<sort.length-1; i++){

        let temp = i+1;

        while(temp < sort.length && sort[temp] - sort[i] <= mins){

            if(sort[temp] - sort[i] == mins){
                pair.push([sort[i],sort[temp]])
                break;
            }
            temp++;
        }

    }

    return pair;
};

console.log(minimumAbsDifference([40,11,26,27,-20]));

// 1 4 5 .. 4