// Simple Fun #318: Sort String (416)

function sortString(s){

    const res = [];

    const match = s.match(/[A-Za-z]/g).sort((a,b) => {

        const tA = a.toLowerCase().charCodeAt(0);
        const tB = b.toLowerCase().charCodeAt(0);

        return tA-tB;
    });


    for(let i = 0, j = 0; i<s.length; i++){

        const cc = s[i].toLowerCase().charCodeAt();

        if(cc < 97 || cc > 122){res.push(s[i])}
        else {res.push(match[j]); j++;}
    }
      
    return res.join('');
}

// Sort Arrays (Ignoring Case) (417)

const sortme = function( names ){
    return names.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}