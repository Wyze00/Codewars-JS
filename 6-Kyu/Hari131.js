// Array Calculator (397)

function evaluate(arr){

    for(let i = 0; i<arr.length; i++){

        if(i % 2 == 0 && isNaN(arr[i])) return undefined;
        else if(i % 2 == 1 && !isNaN(arr[i])) return undefined;
        
    }

    if(isNaN(arr[arr.length-1])) return undefined;

    let multiple = true;
    while(multiple){
        multiple = false;

        for(let i = 0; i<arr.length; i++){

            if(arr[i] == '*'){
                arr.splice(i-1,3,arr[i-1]*arr[i+1]);
                multiple = true;
                break;
            }
        }
    }

    let add = true;
    while(add){
        add = false;

        for(let i = 0; i<arr.length; i++){

            if(arr[i] == '+'){
                arr.splice(i-1,3,~~arr[i-1]+~~arr[i+1]);
                add = true;
                break;
            }
        }
    }

    return arr[0];
}
