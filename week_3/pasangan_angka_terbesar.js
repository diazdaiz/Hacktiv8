function pasanganTerbesar(num) {
    var i,str2,num2,num3;
    var str=num.toString();
    str2="";
    num3=0;
    for(i=0;i<str.length-1;i++){
        str2=str[i]+str[i+1];
        num2=parseInt(str2);
        if(num2>num3){
            num3=num2;
        }
    }
    return num3;
}
  
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99