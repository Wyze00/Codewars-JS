// Throwing Darts (376)

function scoreThrows(radii){

    if(radii.length == 0){
        return 0;
    }

    let point = 0;

    for(const rad of radii){
        if(rad > 10){
            point += 0;
        } else if(rad >= 5){
            point += 5;
        } else {
            point += 10;
        }
    }
    
    if(radii.every((e) => e<5)){
        point += 100;
    }

    return point;
}