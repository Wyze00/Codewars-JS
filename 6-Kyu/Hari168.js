// * Longest alphabetical substring (436)

function longest(str) {

    let long = 0;
    let res = "";

    for(let i = 0; i<str.length; i++){

        let j = i+1;
        while(j < str.length && str[j] >= str[j-1]) j++;

        if(j-i > long){

            long = j-i;
            res = str.slice(i,j);
        }
        
        i = --j;
    }

    return res;
}