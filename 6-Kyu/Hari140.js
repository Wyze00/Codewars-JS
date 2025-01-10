// Back to KinderGarten (eeeeeeasy) (413)

function parseKidList( csv ){

    csv = csv.split("\n");

    return csv.map((e) => {

        e = e.split(",");

        return `${e[0].toUpperCase()} (${e[2].toUpperCase()}) ${e[1].split("/").map(g=>g.padStart(2,'0')).join('/')}`

    });
}
  
function sortByNames( kids ){
    return kids.sort();
}


