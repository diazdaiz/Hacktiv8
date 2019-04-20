function totalDigitRekursif(angka) {
    if(angka/10<1){
        return angka;
    }else{
        var i,angka_baru_1,angka_baru_2,angka_string;
        angka_baru_1="";
        angka_string=angka.toString();
        for(i=1;i<angka_string.length;i++){
            angka_baru_1=angka_baru_1+angka_string[i];
        }
        angka_baru_2=angka_string[0];
        angka_baru_1=parseInt(angka_baru_1);
        angka_baru_2=parseInt(angka_baru_2);
        return totalDigitRekursif(angka_baru_1)+angka_baru_2;
    }
}
  
// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5