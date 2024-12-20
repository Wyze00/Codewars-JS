// How many eggs? (391)

function egged(year,span) { 

    let e = 300;
    let eT = 0;

    for(let i = 1; i<=Math.min(year,span); i++) eT += e * 3; e = Math.floor(e * 0.8);
    
    return eT == 0 ? 'No chickens yet!' : eT;
}

// Closest Sum (392)

const closestSum = (ints, num) => {

    const res = [];

    check(ints, 0, 3);

    function check(arr, sum, depth){

        if(depth == 0){
            res.push(sum);
            return;
        }

        for(let i = 0; i<arr.length-depth+1; i++){
            check(arr.concat().slice(i+1), sum + arr[i], depth - 1);
        }
    }

    return res.sort((a,b) => {
        
        const dif = Math.abs(a-num)-Math.abs(b-num)

        if(dif == 0){
            return a-b;
        }

        return dif;
    })[0];
}


 
