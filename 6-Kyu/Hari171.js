// * Scaling Squared Strings (438)

function scale(strng, k, n) {

    if(strng.length == 0) return "";
    const words = strng.split("\n");
    const res = [];

    for(let i = 0; i<words.length; i++){

        let str = "";

        for(let j = 0; j<words[i].length; j++){

            for(let l = 0; l<k; l++){
                str += words[i][j];
            }
        }

        for(let j = 0; j<n; j++){
            res.push(str);
        }
    }

    return res.join("\n");
}