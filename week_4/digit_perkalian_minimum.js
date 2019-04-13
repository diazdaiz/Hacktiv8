function digitPerkalianMinimum(angka) {
    var i,minimum,angka_1,angka_2;
    for(i=1;i<=angka;i++){
        if(angka%i==0){
            angka_1=i.toString();
            angka_2=(angka/i).toString();
            if((minimum==undefined)||((angka_1.length+angka_2.length)<minimum)){
                minimum=angka_1.length+angka_2.length;
            }
        }
    }
    return minimum;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2