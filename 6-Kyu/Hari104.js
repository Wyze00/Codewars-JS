// Simple Simple Simple String Expansion (349)

function stringExpansion(s) {
    
    if(!s.match(/[A-Za-z]/)){
        return "";
    }

    let rep = s.replace(/(\d)+([A-Za-z]+)/g,(e,p1,p2) => {

        let res = "";

        for(let j = 0; j<p2.length; j++){

            for(let i = 0; i<p1; i++){
                res += p2[j];
            }

        }

        return res;
    });

    while(rep[rep.length-1].match(/\d/)) {
        rep = rep.slice(0,rep.length-1);
    }

    return rep
  }