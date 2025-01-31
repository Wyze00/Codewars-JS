// * Simple Fun #52: Pair Of Shoes (437)

function pairOfShoes(shoes) {

    const myObj = {};

    for(const [lr, num] of shoes){

        if(myObj[num]){
            myObj[num][lr]++;
        }  else {

            myObj[num] = {0: 0, 1: 0};
            myObj[num][lr]++;
        }
    }

    const val = Object.values(myObj);
    return val.every((e) => e[0] == e[1]);
}