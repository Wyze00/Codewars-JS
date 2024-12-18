// Simple Fun #342: Buy Newspaper (387)

function buyNewspaper(s1,s2){
  
    if(!(s2.split("").every((e) => s1.match(e)))){
       return -1
    }
    
    let ctr = 0;
    
    for(let i = 0; i<s2.length; i++){
      
      while(s2[i] != s1[ctr%s1.length]){
        ctr++;
      }
        
      ctr++;
    }
  
    return Math.ceil(ctr/s1.length);
}

