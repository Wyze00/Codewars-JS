// Adding Big Numbers (382)

function add(a,b) { 

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
    
    for(let i = num1.length-1; i>-1; i--){

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