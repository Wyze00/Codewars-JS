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
            // while(tmp != 0){
            //     tmp = Math.floor(tmp / 10);
            //     p[i]++;
            // }

            p[i] = String(tmp).length;
        } else {
          p[i] = tmp.length;
        }

        if(i == 0) continue;

        if(p[i] > p[i-1]){
            console.log(tmp.length);
            console.log(i);
        }

        if(p[i] > p[i-1]) inc++
        else if(p[i] < p[i-1]) dec++
        else con++;
    }

    console.log(inc, dec, con);

    if(con == len-1) return 'Constant'
    else if(inc != 0 && dec != 0) return 'Unsorted'
    else if(inc != 0) return 'Increasing'
    else return 'Decreasing';
}
    