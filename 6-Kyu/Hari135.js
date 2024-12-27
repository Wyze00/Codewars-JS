// Probabilities for Sums in Rolling Cubic Dice (405)

function rolldiceSumProb(sum, dice){

    if(sum < dice || sum > 6*dice) return 0;
    
    const myObj = {};

    function check(res, depth){

        if(depth == dice){

            if(myObj[res]){
                myObj[res]++;
            } else {
                myObj[res] = 1;
            }

            return;
        } 

        
        for(let i = 1; i<= 6; i++){

            check(res + i, depth + 1);
        }
    }

    check(0,0);
    return myObj[sum] / 6**dice;
}