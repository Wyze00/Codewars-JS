// How many eggs? (391)

function egged(year,span) { 

    let e = 300;
    let eT = 0;

    for(let i = 1; i<=Math.min(year,span); i++) eT += e * 3; e = Math.floor(e * 0.8);
    
    return eT == 0 ? 'No chickens yet!' : eT;
}




 
