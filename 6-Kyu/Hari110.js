// Backspaces in string (357)

function cleanString(s) {

    const str = s.split('');
  
    let del = true;

    while(del){

        del = false;

        for(let i = 0; i<str.length; i++){

            if(str[i] == '#'){

                del = true;
                let firstIndex = i;
                let ctr = 1;

                for(let j = i+1; i<str.length; j++){
                    if(str[j] == '#'){ctr++}
                    else {break;}
                }

                if(ctr > firstIndex){
                    str.splice(0,firstIndex+ctr);
                } else {
                    str.splice(i-ctr,ctr+ctr)
                }

                break;
            }
        }
    }
      
    return str.join('');
}