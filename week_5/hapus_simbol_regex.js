function hapusSimbol(str) {
    var i,new_str,new_kata;
    new_kata="";
    new_str=str.match(/[a-z,0-9]/gi);
    for(i=0;i<new_str.length;i++){
        new_kata=new_kata+new_str[i];
    }
    return new_kata;
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100