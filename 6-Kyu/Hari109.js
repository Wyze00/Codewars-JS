// Array Deep Count (355)

function deepCount(a){

    let ctr = 0;

    function check(a){
        for(let i = 0; i<a.length; i++){

            if(Array.isArray(a[i])){
                ctr++;
                check(a[i])
            } else {
                ctr++;
            }
    
        }
    }

    check(a);
    
    return ctr;
}

// Prize Draw (356)

function rank(st, we, n) {

    if(st == ""){return "No participants"}
    const par = st.split(',');
    if(par.length !== we.length || n > par.length || n > we.length){return "Not enough participants"};

    const number = par.map((e,i) => [par[i],(((e).toLowerCase().split('').reduce((a,c) => a + (c.charCodeAt() - 96) ,0) + e.length ) * we[i])]).sort((a,b) => {

        if(b[1]-a[1] == 0){
            return a[0].localeCompare(b[0]);
        }

        return b[1]-a[1];
    });

    return number[n-1][0];
}
