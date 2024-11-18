// Is my friend cheating? (347)

function removeNb (n) {

    const seq = Array.from({length: n+1}).map((_,i) => i);

    let start = 1;
    let end = n;

    let sum = seq.reduce((a,c) => a + c,0) - seq[start] - seq[end];
    let aXb = seq[start] * seq[end];

    const res = [];

    while(start != end){

        if(aXb == sum){
            res.push([seq[start],seq[end]],[seq[end],seq[start]])
        }

        if(aXb < sum){
            start++;

            aXb = seq[start] * seq[end];
            sum = sum + seq[start-1] - seq[start];
            continue;

        } else {
            end--;

            aXb = seq[start] * seq[end];
            sum = sum - seq[end] + seq[end+1];
            continue;
        }
    }

    return res.sort((a,b) => a[0]-b[0]);
}

// PaginationHelper (348)

class PaginationHelper {
    
	constructor(collection, itemsPerPage) {

        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
	}

	itemCount() {
        return this.collection.length;
	}

	pageCount() {
        return Math.ceil(this.collection.length / this.itemsPerPage);
	}

	pageItemCount(pageIndex) {
        
        const pCount = this.pageCount();

        if(pageIndex > pCount - 1 || pageIndex < 0){return -1}
        else if(pageIndex == pCount - 1){return this.collection.length % this.itemsPerPage}
        else {return this.itemsPerPage}
	}

	pageIndex(itemIndex) {

        if(itemIndex > this.collection.length-1 || itemIndex < 0){return -1}

        return Math.floor(itemIndex / this.itemsPerPage);
	}
}

//

function baseSum(array, n){

    const bigN = BigInt(n);

    const str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let b10 = array
                .reduce((a,c) => a + (c.length == 1 
                                      ? BigInt(str.indexOf(c))*bigN**0n 
                                      : c.split('').reverse().reduce((a,q,i) => a + BigInt(str.indexOf(q))*bigN**BigInt(i),0n)
                                     ),0n);

    let res = "";

    while(b10 != 0n){

        res = str[b10%bigN] + res;
        b10 = b10/bigN;

    }
    
    return res.length ? res : "0";
}

