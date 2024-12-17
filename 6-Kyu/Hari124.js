// Financing Plan on Planet XY140Z-n (384)

function finance(n) {

    let res = 0;
 
    for(let i = 0, j = 0, k = 0; i<=n; i++, j+=3, k += j){
         res += k;
     }
     
     return res;
 }

//Triangle number check (385)

function isTriangleNumber(number) {
  
    if(number == 1 || number == 0 || number == 2){
      return true;
    }
    
    let space = 3;
    for(let a = 4, b = 3; b<=number; a+=space, b+=space, space++){
      if(number == a || number == b){
        return true;
      }
    }
    
    return false;
}