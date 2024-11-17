// Simple Fun #237: Suffix Sums (308)

function suffixSums(a) {
    
    const res = [];

    while(a.length != 0){

        res.push(a.reduce((a,c) => a + c,0))

        a.shift();
    }

    return res
  }

// Simple Fun #23: Square Digits Sequence (307)

function squareDigitsSequence(a0) {

    let counter = 1;
    let temp = a0;
    const res = [a0]

    while(true){

        temp = String(temp).split('').reduce((a,c) => a + Number(c)**2,0);
        
        if(res.includes(temp)){
            break;
        
        }

        res.push(temp);
        counter++;
    }

    return ++counter;

  }
