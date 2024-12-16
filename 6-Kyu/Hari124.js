// Financing Plan on Planet XY140Z-n (384)

function finance(n) {

    let res = 0;
 
    for(let i = 0, j = 0, k = 0; i<=n; i++, j+=3, k += j){
         res += k;
     }
     
     return res;
 }

 