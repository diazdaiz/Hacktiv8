function konversi_menit(detik){
    var hasil;
    if(detik%60<10){
        hasil=Math.floor(detik/60)+":0"+detik%60;
    }else{
        hasil=Math.floor(detik/60)+":"+detik%60;
    }
    return hasil;
}
console.log(konversi_menit(123));
