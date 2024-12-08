// Sum Strings as Numbers (374)

function sumStrings(a,b) { 

    let num1 = a.split('');
    let num2 = b.split('');

    if(num2.length > num1.length){
        [num1,num2] = [num2,num1];
    }

    for(let i = num2.length-1, j = num1.length-1; i>-1; i--, j--){

        const sum = (Number(num1[j]) + Number(num2[i])).toString().split('');

        if(sum.length > 1){

            if(j == 0){
                num1.unshift(sum[0]);
                num1[j+1] = sum[1];
            } else {
                num1[j-1] = String(Number(num1[j-1])+Number(sum[0]));
                num1[j] = sum[1];
            }

        } else {
            num1[j] = sum[0];
        }
    }
    

    for(let i = num1.length-1; i<-1; i--){

        if(num1[i] > 9){
            const temp = num1[i].split('');
            num1[i] = temp[1];

            if(i == 0){
                num1.unshift(temp[0]);
            } else {
                num1[i-1] = String(Number(num1[i-1])+Number(temp[0]));
            }
        }
    }

    let result = num1.join('');

    while(result[0] == '0'){
        result = result.slice(1);
    }

    return result;
}

// Strings Mix (375)

function mix(s1, s2) {

    const letter1 = s1.match(/[a-z]/g);
    const letter2 = s2.match(/[a-z]/g);

    const myObj1 = {};
    const myObj2 = {};

    for(let i = 0; i<letter1.length; i++){

        if(myObj1[letter1[i]]){
            myObj1[letter1[i]]++;
        } else {
            myObj1[letter1[i]] = 1;
        }
    }

    for(let i = 0; i<letter2.length; i++){

        if(myObj2[letter2[i]]){
            myObj2[letter2[i]]++;
        } else {
            myObj2[letter2[i]] = 1;
        }
    }

    const result = [];

    for(const letter in myObj1){

        const l1 = myObj1[letter];
        const l2 = myObj2[letter];

        if(l1 == 1 && l2 == 1){
            continue;
        }

        if(l2 == undefined && l1 > 1 || l1 > l2){
            result.push(['1', ''.padEnd(l1, letter)]);
            continue;
        } else if(l1 > l2){
            result.push(['1', ''.padEnd(l1, letter)]);
        } else if(l1 == l2) {
            result.push(['=', ''.padEnd(l1, letter)]);
        } else if(l2 > l1){
            result.push(['2', ''.padEnd(l2, letter)]);
        }  
    }

    for(const letter in myObj2){

        const l2 = myObj2[letter];

        if(myObj1[letter] == undefined && l2 > 1){
            result.push(['2', ''.padEnd(l2, letter)]);  
        }
    }

    result.sort((a,b) => {

        if(a[1].length == b[1].length && a[0] == b[0]){
            return a[1][0].charCodeAt()-b[1][0].charCodeAt();
        } else if(a[1].length == b[1].length){
            return a[0].charCodeAt()-b[0].charCodeAt();
        }

        return b[1].length-a[1].length;
    });

    return result.map((e) => e.join(':')).join('/');
}