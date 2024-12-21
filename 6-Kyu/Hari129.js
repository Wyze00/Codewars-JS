
// Sum of Two Integers (394)

function add(x, y) {
    while (y !== 0) {
        let carry = (x & y) << 1; 
        x = x ^ y;       
        y = carry;                
    }
    return x;
}


