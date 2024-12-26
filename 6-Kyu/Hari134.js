// Simple Fun #326a: The Shorterest Time (403)

function shorterestTime(n,m,speeds) {

    const res = [];

    for(let i = n; i>=1; i--){
        res.push((Math.abs(i-m)+i) * speeds[0] + speeds[1]*2 + speeds[2] + speeds[3]*(n-i));
    }
    
    res.push(n * speeds[3]);

    return res.sort((a,b) => a-b)[0];
}

// Simple Fun #141: Hamming Distance (404)

function hammingDistance (a, b) {

    const xor = (a ^ b).toString(2);

    let ctr = 0;
    for(let i = 0; i<xor.length; i++) if(xor[i] == '1') ctr++;

    return ctr;
}