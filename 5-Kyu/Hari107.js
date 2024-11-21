// String insert values (353)

var format = function (str, obj) {

    let res = str;

    if(!Array.isArray(obj)) {

        let ctr = 0;

        for(const ind in obj){

            const reg = new RegExp("{" + ind + "}","g");

            res = res.replaceAll(reg,"{" + ctr + "}");
            ctr++;

        }
    }

    let ctr = 0;

    for(const name of Object.values(obj)){
        res = res.replaceAll(`{${ctr}}`, name);
        ctr++;
    }

    return res;
};