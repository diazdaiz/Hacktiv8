function cariModus(arr) {
    var i,j,banyak,terbanyak;
    terbanyak=[0,0];
    banyak=[];
    for(i=0;i<arr.length;i++){
        banyak.push(0);
    }
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length;j++){
            if(arr[i]==arr[j]){
                banyak[i]=banyak[i]+1;
            }
        }
    }
    for(i=arr.length-1;i>=0;i--){
        if(banyak[i]>=terbanyak[1]){
            terbanyak[0]=arr[i];
            terbanyak[1]=banyak[i];
        }
    }
    if((terbanyak[1]==1)||(terbanyak[1]==arr.length)){
        return -1;
    }
    return terbanyak[0];
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1