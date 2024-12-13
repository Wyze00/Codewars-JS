// Sum The Tree (381)

function sumTheTreeValues(root){

    let sum = 0;
    
    function check(node){

        if(node.left){
            check(node.left);
        }

        if(node.right){
            check(node.right);
        }

        sum += node.value;
    }

    check(root);
    return sum;
}
