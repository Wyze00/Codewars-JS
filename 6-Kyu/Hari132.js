// A small difference (399)

function oneCharDifference(s1, s2) {

    if(s1.length > s2.length) [s1,s2] = [s2,s1];

    let ctr = 0;
    const same = s1.length == s2.length;

    for(let i = 0, j = 0; i<s2.length ; i++){

        if(s1[j] == s2[i]){
            ctr++;
            if(!same) j++;
        } 

        if(same) j++;
    }

    return ctr == s2.length-1;
}


// Increment with iterations (400)

function increment(number, iterations, spacer) {

    const num = number.toString().split('').map(e=>~~e);
    let len = num.length;

    for(let i = 1, j = spacer%num.length ; i<=iterations; i++, j = (j + spacer) % num.length){   

        num[j]++;

        for(let i = num.length-1; i > 0; i--){

            if(num[i] > 9){
                num[i-1]++;
                num[i] = 0;
            }
        }

        while(num[0] > 9){
            num.unshift(1);
            num[1] = 0;
        }

        if(num.length > len){
            j++;
            len++;
        }
    }

    return Number(num.join(''));
}