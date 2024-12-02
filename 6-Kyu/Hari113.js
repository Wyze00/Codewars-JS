// English beggars (364)

function beggars(values, n){

    const res = new Array(n).fill(0);

    for(let i = 0; i<values.length; i++){
        res[i%res.length] += values[i];
    }

    return res;
}


// Linked Lists - Length & Count (365)

function Node(data) {
    this.data = data;
    this.next = null;
}
  
function length(head) {

    let ctr = 0;

    while(head != null){
        ctr++;
        head = head.next;
    }

    return ctr;  
}

function count(head, data) {

    let ctr = 0;
    
    while(head != null){
        if(head.data == data){
            ctr++;
        }
        head = head.next;
    }

    return ctr;
}