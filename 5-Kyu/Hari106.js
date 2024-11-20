// How many new friends John has? (352)

function countNewFriends(n){
    
    const faktor = [];

    for(let i = 2; i<=Math.ceil(n/2); i++){
        if(n % i == 0){
            faktor.push(i);
        }
    }

    if(faktor.length == 0 && n > 2){
        return n-2;
    }

    const newFriend = Array.from({length: n+1}).fill(true);

    newFriend[0] = newFriend[1] = false;

    for(const fact of faktor){
        for(let i = fact; i<newFriend.length; i+=fact){
            newFriend[i] = false;
        }
    }

    return newFriend.filter(e=>e).length;
}
  