function kaliTerusRekursif(angka) {
    var i;
    if(angka.toString().length==1){
        return angka;
    }else{
        var angka_string,hasil;
        hasil=1;
        angka_string=angka.toString();
        for(i=0;i<angka_string.length;i++){
            hasil=hasil*parseInt(angka_string[i]);
        }
        return kaliTerusRekursif(hasil);
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6