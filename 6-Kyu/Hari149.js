// * The maximum sum value of ranges -- Simple version (423)

function maxSum(arr,range){
    
    let max = -Infinity;
    for(let i = 0; i<range.length; i++){

        let temp = 0;
        for(let j = range[i][0]; j<=range[i][1]; j++) temp+=arr[j];
        if(temp > max) max = temp;
    }
    
    return max;
}

// * Custom Christmas Tree (424)

function customChristmasTree(chars,n){
  
    let res = ``;
    let ctr = 0;

    for(let i = 1; i<=n; i++){

        for(let j = n-i; j>0; j--){
            res += " ";
        }

        for(let j = 0; j<i; j++){
            res += chars[ctr % chars.length];
            if(j != i-1) res += " ";
            ctr++;
        }

        res += "\n";
    }

    for(let i = 0; i<Math.floor(n/3); i++){
        
        for(let i = 1; i<=n-1; i++){
            res += " ";
        }

        res += "|"
        if(i != Math.floor(n/3)-1) res += "\n";
    }

    return res;
}