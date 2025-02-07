// * Count word occurrences (433)

var wordCounter = function(text) {

    const obj = {};
    text = text.replace(/[,.]/g, "");
    text = text.split(" ");

    for(let i = 0; i<text.length; i++){
        
        if(obj[text[i]]){
            if(text[i] == "constructor") { 
                obj["cccnnn"] = obj["cccnnn"] ? obj["cccnnn"] + 1 : 1
                continue;
            }
            obj[text[i]] = obj[text[i]] + 1;
        } else {
            obj[text[i]] = 1;
        }
    }

    obj.count = function(text){

        if(this[text]){
            if(text == "constructor") return obj["cccnnn"] ? obj["cccnnn"] : 0;
            return this[text];
        } else {
            return 0;
        }
    }

    return obj;
};