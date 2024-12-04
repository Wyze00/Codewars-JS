// Concatenate sequential page numbers in an array (367)

function paginate(arr) {
    
    arr.sort((a,b) => a-b);
    const res = [];
    
    for(let i = 0; i<arr.length; i++){

        const first = i;
        let second = i;

        while(arr[second] == arr[second+1]-1){
            second++;
        }

        first == second ? res.push(`${arr[first]}`) : res.push(`${arr[first]}-${arr[second]}`);
        i = second;
    }
    
    return res.join(', ')
}

// Greatest Common Factor of an Array (368)

function greatestCommonFactor(array) {

    for(let i = Math.min(...array); i>0; i--){
        
        const len = array.filter((e) => e % i == 0 ).length;

        if(len == array.length){
            return i;
        }
    }
};



