// * Add All (427)

function addAll(numbers) {
    
    let cost = 0;
    while(numbers.length > 1){

        numbers = numbers.sort((a,b) => a-b);
        const temp = numbers.shift() + numbers.shift();

        cost += temp;
        numbers.push(temp);
    }

    return cost;
}
