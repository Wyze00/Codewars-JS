// Split all even numbers to odd ones in different ways (414)

function splitAllEvenNumbers(numbers, way){
    
    if(way == 0) return isZero()
    else if(way == 1) return isOne()
    else if(way == 2) return isTwo()
    else return isThree();

    function isZero(){

        for(let i = 0; i<numbers.length; i++){
            
            const even = numbers[i];

            if(even % 2 == 0){

                const two = even / 2;

                if(two % 2 == 0){
                    numbers.splice(i, 1, two-1, two+1);
                } else {
                    numbers.splice(i, 1, two, two);
                }
            }
        }

        return numbers;
    }

    function isOne(){

        for(let i = 0; i<numbers.length; i++){
            
            const even = numbers[i];

            if(even % 2 == 0){

                numbers.splice(i, 1, 1, even-1);
            }
        }

        return numbers;
    }

    function isTwo(){

        for(let i = 0; i<numbers.length; i++){
            
            const even = numbers[i];

            if(even % 2 == 0){

                const two = even / 2;

                if(two % 2 == 0){
                    numbers.splice(i, 1, ...Array(even).fill(1));
                } else {
                    numbers.splice(i, 1, two, two);
                }
            }
        }

        return numbers;
    }

    function isThree(){

        for(let i = 0; i<numbers.length; i++){
            
            const even = numbers[i];

            if(even % 2 == 0){
                numbers.splice(i, 1, ...Array(even).fill(1));
            }
        }

        return numbers;
    }
}

