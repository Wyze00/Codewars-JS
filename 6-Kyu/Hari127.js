// Shortest steps to a number (389)

function shortestStepsToNum(num) {

    let ctr = 0;

    while (num != 1){

        if(num % 2 == 0){
            num /= 2;
            ctr ++;
        } else {
            num -= 1;
            ctr++
        }
    }

    return ctr;
}