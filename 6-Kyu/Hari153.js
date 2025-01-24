// * Assemble string (431)

function assembleString(array){

    if(!array.length) return "";
    let res = "";

    for(let i = 0; i<array[0].length; i++){


        for(let j = 0; j<array.length; j++){
            if(array[j][i] != "*"){
                res += array[j][i]
                break;
            }
        }

        if(res.length == i) res += "#";
    }

    return res;
}


