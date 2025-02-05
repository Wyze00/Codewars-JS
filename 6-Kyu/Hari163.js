// * Javascript from the Inside #2: Filter (431)

Array.prototype.filter = function(fn, tA){

    if(typeof fn != 'function') return [];
    if(this == null || this.length == 0) return [];

    const arr = this;
    const len = arr.length
    const res = [];

    for(let i = 0; i<arr.length; i++){

        if(i in arr) if(fn.bind(tA, arr[i], i, arr)()) res.push(arr[i]);

        while(arr.length != len){
            arr.pop();
        }
    }

    return res;
}