// Christmas mission: Distribute gifts #5 (418)

function distributeGifts(map){

    const mult = map.split('\n');
    let myMap = new Map();
    let santa = [-1,-1];
    let res = 0;

    for(let i = 0; i<mult.length; i++){

        for(let j = 0; j<mult[0].length; j++){

            if(mult[i][j] === 's'){
                santa[0] = i;
                santa[1] = j;

            }  else if(mult[i][j] != '.') myMap.set(mult[i][j], [i, j]);
        }
    }

    if(santa[0] === -1) return "Where is Santa Claus?";
    myMap = [...myMap];
    myMap.sort();

    for(let i = 0; i<myMap.length; i++){
        
        res += Math.abs(santa[0] - myMap[i][1][0]) + Math.abs(santa[1] - myMap[i][1][1]);
        santa = myMap[i][1];
    }
    
    return res;
}