// Simple Fun #326a: The Shorterest Time (403)

function shorterestTime(n,m,speeds) {

    const res = [];

    for(let i = n; i>=1; i--){
        res.push((Math.abs(i-m)+i) * speeds[0] + speeds[1]*2 + speeds[2] + speeds[3]*(n-i));
    }
    
    res.push(n * speeds[3]);

    return res.sort((a,b) => a-b)[0];
}
