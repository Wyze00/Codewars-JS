// * Join Two Arrays by Id (434)

function joinArraysById(arr1, arr2) {

    const myMap = new Map();

    for(let i = 0; i<arr1.length; i++){
        myMap.set(arr1[i].id, i);
    }

    for(let i = 0; i<arr2.length; i++){

        if(myMap.has(arr2[i].id)){

            const index = myMap.get(arr2[i].id);
            const val = Object.entries(arr2[i]);
            console.log(val[0][1]);

            for(let j = 0; j<val.length; j++){
                arr1[index][val[j][0]] = val[j][1]; 
            }

        } else {
            arr1.push(arr2[i]);
        }
    }

    return arr1.sort((a,b) => a.id-b.id);
}


