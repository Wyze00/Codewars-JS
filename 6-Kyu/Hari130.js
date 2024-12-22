// Shortest Code : Planting Trees (395)

sc=(w,l,g)=>(e=(w+l)*2-4)%(g+1)?0:e/(g+1);

// I love big nums and I cannot lie (396)

function biggest(nums) {

    let bucket = [[], [], [], [], [], [], [], [], [], []]

    for(let i = 0; i<nums.length; i++){

        let num = nums[i];

        while(Math.floor(num/10) != 0){
            num = Math.floor(num/10);
        }       

        bucket[num].push(nums[i]);
    }

    for(let i = 9; i>-1; i--){

        if(bucket[i].length == 0){
            bucket[i] = '';
            continue;
        }

        const numz = bucket[i];

        for(let j = 0; j<numz.length-1; j++){

            let max = j;
            for(let k = j+1; k<numz.length; k++){

                const a = numz[max] + "" + numz[k];
                const b = numz[k] + "" + numz[max];

                if(a < b){
                    max = k;
                }
            }

            [numz[max], numz[j]] = [numz[j], numz[max]];
        }
        

        bucket[i] = bucket[i].reduce((a,c) => a + c,'');
    }

    bucket = bucket.reverse().join('');
    return bucket == 0 ? '0' : bucket;
};

