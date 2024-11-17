// The Feast of Many Beasts (332)

function feast(beast, dish) {

    return beast[0] == dish[0] && beast[beast.length-1] == dish[dish.length-1];
    
}

// Nth Root of a Number (333)

function root(x, n) {
    return Math.pow(x,1/n);
}

// Valid Braces (334)

function validBraces(braces){

    let temp = [];

    for(let i = 0; i<braces.length; i++){

        if(braces[i].match(/\(|\{|\[/)){temp.push(braces[i])}
        else {
           const brc = temp.pop();

           if(brc == undefined){return false}

           if(brc == "(" && braces[i] != ")"){return false;}
           else if(brc == "[" && braces[i] != "]"){return false;}
           else if(brc == "{" && braces[i] != "}"){return false;}
        }
    }

    return temp.length ? false : true;

}
 

