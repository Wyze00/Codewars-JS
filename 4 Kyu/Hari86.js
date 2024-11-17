// So Many Permutations! (318)

function permutations(string) {
    

    const ASLI = string.split('');

    const res = [];
    
    for(let i = 0; i<string.length; i++){

        let temp = ASLI.concat();

            if(i != 0){
                temp.unshift(...temp.splice(i,1));
            }

        const pertama = [temp.shift()];

        console.log(pertama);

        console.log(temp);



    }

}


console.log(permutations('abcd'));