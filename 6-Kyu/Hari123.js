// Smallest Permutation (383)

function minPermutation(n) {

    n = String(n).split('').sort((a,b) => ~~a-~~b);

    if(n[0] == '-'){

        let i = 1;

        while(n[i] == '0'){
            i++;
        }

        [n[1], n[i]] = [n[i], n[1]];

    } else {

        let i = 0;

        while(n[i] == '0'){
            i++;
        }

        [n[0], n[i]] = [n[i], n[0]];
    }
    
    return Number(n.join(''));
}