function hitungJumlahKata(kalimat) {
    var i,ada,kata;
    ada=0;
    kata=0;
    for(i=0;i<kalimat.length;i++){
        if((kalimat[i]!=" ")&&(ada==0)){
            ada=1;
            kata=kata+1;
        } else if(kalimat[i]==" "){
            ada=0;
        }
    }
    return kata;
}
  
// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5