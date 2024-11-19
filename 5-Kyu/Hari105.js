// Memoized Fibonacci (350)

function fibonacci(n) {

    const arr = new Array(n+1);

    function fib(n){

        if (n < 2) {
          return n;
        }

        if(arr[n]){
            return arr[n];
        }

        const temp = fib(n - 1) + fib(n - 2);

        arr[n] = temp;

        return temp;
    }

    return fib(n);
}

// Simple string indices (351)

function solve(str,idx){

    const stack = [];

    if(str[idx] != '('){
        return -1;
    }

    stack.push('(');

    for(let i = idx+1; i<str.length; i++){

        if(str[i] == '('){

            stack.push(str[i]);

        } else if(str[i] == ')'){

            stack.pop();

            if(stack.length == 0){

                return i;
            }
        }
    }

    return -1;
}


