function sorting(arrNumber) {
    var i,j,temp;
    for(i=0;i<arrNumber.length;i++){
        for(j=0;j<arrNumber.length;j++){
            if(arrNumber[i]<arrNumber[j]){
                temp=arrNumber[j];
                arrNumber[j]=arrNumber[i];
                arrNumber[i]=temp;
            }
        }
    }
    return arrNumber;
}

function getTotal(arrNumber) {
    var i,j,banyak,terbanyak;
    terbanyak=0;
    for(i=arrNumber.length-1;i>=0;i--){
        banyak=0;
        for(j=arrNumber.length-1;j>=0;j--){
            if(arrNumber[i]==arrNumber[j]){
                banyak=banyak+1;
                terbanyak=banyak;
            }else{
                break;
            }
        }
    }
    return terbanyak;
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  if(countHighest==0){
      return ""
  }else{
      return "angka paling besar adalah "+listSort[listSort.length-1]+" dan jumlah kemunculan sebanyak "+countHighest+" kali";
  }
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''