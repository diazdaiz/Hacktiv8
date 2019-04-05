function perkalianUnik(arr) {
    var i,j,kali;
    var arr2=[];
    for(i=0;i<arr.length;i++){
        kali=1;
        for(j=0;j<arr.length;j++){
            if(i!=j){
                kali=kali*arr[j];
            }
        }
        arr2.push(kali);
    }
    return arr2;
}
  
// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]