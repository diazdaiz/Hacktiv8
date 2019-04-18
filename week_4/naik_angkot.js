function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var i,j,mulai,akhir,output,bayar;
    output=[];
    for(i=0;i<arrPenumpang.length;i++){
        for(j=0;j<rute.length;j++){
            if(arrPenumpang[i][1]==rute[j]){
                mulai=j;
            }
            if(arrPenumpang[i][2]==rute[j]){
                akhir=j;
            }
        }
        bayar=Math.abs(akhir-mulai)*2000;
        output.push({
            "penumpang":arrPenumpang[i][0],
            "naikDari":arrPenumpang[i][1],
            "tujuan":arrPenumpang[i][2],
            "bayar":bayar
        })
    }
    return output;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'F', 'B'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]