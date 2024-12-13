// Help Kiyo きよ solve her problems LCM Fun! (380)

function kiyoLcm(a) {

    a = a.map((e) => e.reduce((a,c) => a + (c % 2 == 0 || isNaN(c) ? 0 : c),0));

    if(a.includes(0)){
        return 0;
    }

    const myMap = new Map();

    a.forEach((e) => {

        for(let i = 2; i<=e; i++){

            if(e % i == 0){
                let temp = 0;

                while(e % i == 0){
                    temp += 1;
                    e /= i;
                }

                if(myMap.has(i) && myMap.get(i) < temp){
                    myMap.set(i,temp);
                } else if(!myMap.has(i)){
                    myMap.set(i, temp);
                }
            }
        }
    });   
        
    return myMap.size === 0 ? 0 : [...myMap].reduce((a,c) => a * (c[0]**c[1]),1);
}