// * Counting DNA Nucleotides (426)

function getCountedNucleotides(genCode){

    const res = {
        'A': 0,
        'C': 0,
        'G': 0,
        'T': 0
    }

    for(let i = 0; i<genCode.length; i++){

        const temp = genCode[i].match(/[acgtACGT]/)[0];

        if(temp){
            res[temp[0].toUpperCase()]++;
        }
    }

    return res;
}
