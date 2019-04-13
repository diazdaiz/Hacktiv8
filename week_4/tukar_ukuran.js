function tukarBesarKecil(kalimat) {
    var i,j,alph,ALPH,temp;
    alph="abcdefghijklmnopqrstuvwxyz"
    ALPH="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    temp="";
    for(i=0;i<kalimat.length;i++){
        for(j=0;j<=alph.length;j++){
            if(kalimat[i]==alph[j]){
                temp=temp+ALPH[j];
                break;
            } else if(kalimat[i]==ALPH[j]){
                temp=temp+alph[j];
                break;
            } else if(j==26){
                temp=temp+kalimat[i];
            }
        }
    }
    return temp;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"