// Rectangle into Squares (360)

function sqInRect(lng, wdth){

    let max = Math.max(lng,wdth);
    let min = Math.min(lng,wdth);
    let cubic = max * min;
    const res = [];

    while(cubic != 0){

        res.push(min);
        cubic -= min*min;

        const temp = cubic / min;
        max = Math.max(min,temp);
        min = Math.min(min,temp);
    }

    return res;
}

// Reverse polish notation calculator (361)

function calc(expr) {

    if(expr == ''){return 0}

    expr = expr.split(' ');
  
    function calcA(a,b,c){
      if(c == '+'){return String(Number(a) + Number(b))};
      if(c == '-'){return String(Number(a) - Number(b))};
      if(c == '*'){return String(Number(a) * Number(b))};
      if(c == '/'){return String(Number(a) / Number(b))};
    }

    function check(c){
      if(c == '+' || c  == '-' || c == '*' || c == '/'){return true}
      else{return false}
    }

    let exp = true;
    while(exp == true){

        exp = false;

        for(let i = 0; i<expr.length; i++){
            if(check(expr[i])){
                expr.splice(i-2,3,calcA(expr[i-2],expr[i-1],expr[i]));
                exp = true;
                break;
            }
        }
    }
    
  return Number(expr[0])
}

// Statistics for an Athletic Association (362)

function stat(strg) {
    
    const time = strg.split(', ').map(e=>toTime(e)).sort((a,b) => a-b);
    
    function toTime(time){

        const hms = time.split('|');
        let res = 0;

        res += hms[0] * 3600;
        res += hms[1] * 60;
        res += hms[2] * 1;

        return res;
    }

    function toFormat(time){

        const h = time >= 3600 ? String(Math.floor(time/3600)).padStart(2,'0') : '00';
        const m = time%3600 >= 60 ? String(Math.floor(time%3600/60)).padStart(2,'0') : '00';
        const s = String(time%3600%60).padStart(2,'0')

        return [h,m,s].join('|');
    }

    const average = Math.floor(time.reduce((a,c) => a + c,0)/time.length);
    const range = Math.floor(time[time.length-1] - time[0]);
    const median = time.length % 2 == 1 ? time[(time.length-1)/2] : Math.floor((time[time.length/2] + time[time.length/2-1])/2);

    return `Range: ${toFormat(range)} Average: ${toFormat(average)} Median: ${toFormat(median)}`
}

// longest_palindrome (363)

function longestPalindrome(s){

    if(s == ''){return 0}

    const stack = [s[0]];
    let longest = 1;

    for(let i = 1; i<s.length; i++){

        if(stack[stack.length-1] == s[i]){

            let temp = 2;

            for(let j = i+1, k = i-2; j<s.length, k>=0; j++ , k--){

                if(stack[k] == s[j]){
                    temp +=2;
                } else {
                    break;
                }
            }

            stack.push(s[i]);

            if(temp > longest){
                longest = temp;
            }

        } else if(stack[stack.length-1] == s[i+1]){

            let temp = 3;

            for(let j = i+2, k = i-2; j<s.length, k>=0; j++ , k--){

                if(stack[k] == s[j]){
                    temp +=2;
                } else {
                    break;
                }
            }

            stack.push(s[i]);

            if(temp > longest){
                longest = temp;
            }

        } else {
            stack.push(s[i])
        }         
    }
    
    return longest;
}