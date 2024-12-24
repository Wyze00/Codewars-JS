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


