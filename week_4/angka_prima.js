function angkaPrima(angka) {
    var a=0;
    var i;
    for(i=1;i<=angka;i++){
        if(angka%i==0){
            a=a+1;
        }
    }
    if(a!=2){
        return false;
    } else{
        return true;
    }
}
  
// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(31)); // false