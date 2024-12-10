//Grouping integers into a nested list (379)

function groupInts(xs,x) {

    const res = [];

    for(let i = 0; i<xs.length; i++){

        const temp = [];

        if(xs[i] < x){

            while(xs[i] < x){
                temp.push(xs[i]);
                i++;
            }

        } else {

            while(xs[i] >= x){
                temp.push(xs[i]);
                i++;
            }
        }
        i--;
        res.push(temp);
    }

    return res;
}