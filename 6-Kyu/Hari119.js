// search in multidimensional array (377)

var locate = function(arr,value){
    
    function check(arr){

        for(let i = 0; i<arr.length; i++){

            if(Array.isArray(arr[i])){
               if(check(arr[i])){
                return true;
               }
                continue;
            }



            if(arr[i] == value){
                return true;
            }
        }

        return false;
    }

    return check(arr);
}

// Autocomplete! Yay! (378)

function autocomplete(input, dictionary){

    console.log(input.replace(/[^a-zA-Z1234567890]/g,''));

    const arr =  dictionary.filter((e) => {

        const temp = e.replace(/[^a-zA-Z1234567890]/g,'');

        return temp.toLowerCase().startsWith(input.toLowerCase());

    })
    
    return arr.length > 5 ? arr.slice(0,5) : arr;
}
