// * Heroes of Might & Magic II: One-on-One (422)

function whoWouldWin(mon1, mon2) {

    let h1 = mon1.hitpoints * mon1.number, h2 = mon2.hitpoints * mon2.number;
    let n1 = mon1.hitpoints, n2 = mon2.hitpoints;

    while(h1 > 0 && h2 > 0){

        h2 -= (Math.ceil(h1/n1)) * mon1.damage;
        if(h2 <= 0) break;
        h1 -= (Math.ceil(h2/n2)) * mon2.damage;
    }

    if(h1 > h2){
        return `${Math.ceil(h1/n1)} ${mon1.type}(s) won`;
    } else {
        return `${Math.ceil(h2/n2)} ${mon2.type}(s) won`;
    }
}