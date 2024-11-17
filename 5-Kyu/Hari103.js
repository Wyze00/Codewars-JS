// Is my friend cheating? (347)

function removeNb (n) {

    const seq = Array.from({length: n+1}).map((_,i) => i);

    let start = 1;
    let end = n;

    let sum = seq.reduce((a,c) => a + c,0) - seq[start] - seq[end];
    let aXb = seq[start] * seq[end];

    while(aXb != sum){

        if(start == end){return []}

        if(aXb < sum){
            start++;

            aXb = seq[start] * seq[end];
            sum = sum + seq[start-1] - seq[start];
            continue;

        } else {
            end--;

            aXb = seq[start] * seq[end];
            sum = sum - seq[end] + seq[end+1];
            // continue;
        }
    }

    return [[seq[start],seq[end]],[seq[end],seq[start]]]
}

console.log(removeNb(26));