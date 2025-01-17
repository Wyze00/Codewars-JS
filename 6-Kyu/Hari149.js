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