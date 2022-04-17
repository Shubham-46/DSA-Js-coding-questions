// i/o=>"aabbcc";
// o/p=>"yes";

function detectPalII(N, string){
    let map = {};
    let count = 0;
    for(let i = 0; i<N; i++){
        if(!map[string[i]]) map[string[i]] = 0;
        map[string[i]]++;
    }
    for(k in map){
        if(map[k]%2==1){
            count++;
        }
        
    }
    if(count<=1) console.log("Possible!")
    else console.log("Not Possible!")
}
