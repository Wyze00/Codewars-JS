// Simple Fun #15: Addition without Carrying (408)

function additionWithoutCarrying(a,b) {
    
    let result = 0;
    let multipier = 1;

    while(a != 0 && b != 0){

        const tempA = a % 10;
        const tempB = b % 10;

        result = result + (multipier * ((tempA + tempB) % 10));

        a = Math.floor(a / 10);
        b = Math.floor(b / 10);
        multipier = multipier * 10;
    }

    while(a != 0){

        const tempA = a % 10;

        result = result + (multipier * (tempA % 10));

        a = Math.floor(a / 10);
        multipier = multipier * 10;
    }

    while(b != 0){

        const tempB = b % 10;

        result = result + (multipier * (tempB % 10));

        b = Math.floor(b / 10);
        multipier = multipier * 10;
    }
    
    return result;
}
