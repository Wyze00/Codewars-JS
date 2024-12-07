// Square into Squares. Protect trees! (373)

function decompose(n) {

    const result = [];

    for (let i = n - 1; i > 0; i--) {
        const arr = [i];

        if (another(Math.floor(Math.sqrt(n ** 2 - i ** 2)), (n ** 2 - i ** 2), arr.concat())) {
            return result[0];
        }
    }

    return null;

    function another(n, rem, arr) {
        if (rem === 0) {
            result.push(arr);
            return true; 
        }

        for (let i = n; i > 0; i--) {

            if (arr.includes(i) || arr[0] < i) {
                break;
            }

            const temp = arr.concat();
            temp.unshift(i);

            if (another(Math.floor(Math.sqrt(rem - i ** 2)), (rem - i ** 2), temp)) {
                return true; 
            }
        }
        return false; 
    }
}