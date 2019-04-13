function ubahHuruf(kata) {
    var i,j,alph,temp;
    alph="abcdefghijklmnopqrstuvwxyz";
    temp="";
    for(i=0;i<kata.length;i++){
        
        for(j=0;j<alph.length;j++){
            if(kata[i]==alph[j]){
                temp=temp+alph[(j+1)%26];
            }
        }
    }
    return temp;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu