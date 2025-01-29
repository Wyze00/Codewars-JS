// * Generate Chat Room Names (435)

function generateChatRoomNames(users) {

    const name = {};

    for(let i = 0; i<users.length; i++){

        const [first, second] = users[i].split(" ").map((e) => e[0].toUpperCase() + e.slice(1).toLowerCase());

        if(name[first]){
            name[first].num++;
            name[first].full.push(second);

            if(name[first].sec[second[0]]){
                name[first].sec[second[0]]++;
            } else {
                name[first].sec[second[0]] = 1;
            }
        } else {
            name[first] = {num: 1, full: [second], sec: {}};
            name[first].sec[second[0]] = 1;
        }
    }

    const entr = Object.entries(name);
    const res = [];

    for(let i = 0; i<entr.length; i++){

        const fName = entr[i][0];
        const obj = entr[i][1];

        if(obj.num == 1){
            res.push(fName);
            continue;
        }

        const alp = Object.entries(obj.sec);

        for(let j = 0; j<alp.length; j++){

            if(alp[j][1] > 1){

                for(let k = 0; k<obj.full.length; k++){
                    if(obj.full[k].startsWith(alp[j][0])){
                        res.push(fName + " " + obj.full[k]);
                    }
                }

            } else {

                for(let k = 0; k<obj.full.length; k++){
                    if(obj.full[k].startsWith(alp[j][0])){
                        res.push(fName + " " + obj.full[k][0]);
                    }
                }
            }
        }
    }

    return res.sort();
}
