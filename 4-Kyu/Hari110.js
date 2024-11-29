// The observed PIN (358)

function getPINs(observed) {

    const num = {
        1: ['1','2','4'],
        2: ['1','2','3','5'],
        3: ['2','3','6'],
        4: ['1','4','5','7'],
        5: ['2','4','5','6','8'],
        6: ['3','5','6','9'],
        7: ['4','7','8'],
        8: ['5','7','8','9','0'],
        9: ['6','8','9'],
        0: ['8','0']
    }

    const chance = [];
    const result = []

    String(observed).split('').forEach((e) => {
        chance.push(num[e]);
    })


    function check(arr, res){
        
        if(arr.length == 0){return result.push(res);}

        const temp = arr.shift();

        for(let i = 0; i<temp.length; i++){
            check(arr.concat(), res + temp[i]);
        }
    }

    check(chance,'');

    return result.sort();
}