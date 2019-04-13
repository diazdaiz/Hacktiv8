function fpb(angka1, angka2) {
    var temp,tampung,i;
    if(angka1<angka2){
        temp=angka1;
    }else{
        temp=angka2;
    }
    tampung=0;
    for(i=1;i<temp;i++){
        if((angka1%i==0)&&(angka2%i==0)&&(i>tampung)){
            tampung=i;
        }
    }
    return tampung;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1