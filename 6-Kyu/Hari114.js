// Two Joggers (366)

var nbrOfLaps = function (x, y) {

    for(let i = Math.min(x,y); i>1; i--){

        while(x%i == 0 && y%i == 0){
            x /= i;
            y /= i;
        }
    }

    return [y,x]
}

// Autocomplete! Yay!

function autocomplete(input, dictionary){

    const arr =  dictionary.filter((e) => {

        const temp = e.replace(/[^a-zA-Z1234567890]/g,'');

        return temp.match(input) != null;

    })
    
    return arr;
}