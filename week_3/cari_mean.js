function cariMean(arr) {
    var i,temp;
    temp=0;
    for(i=0;i<arr.length;i++){
        temp=temp+arr[i]
    }
    return Math.ceil(temp/arr.length);
}
  
// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2 <--seharusnya 3 (3+3+1=7, 7/3=2,3333, pembulatan keatas 3)
console.log(cariMean([7, 7, 7, 7, 7])); // 7