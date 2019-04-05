function balikString(str){ //diambil dari tugas array 1
    var i;
    var temp="";
    for(i=0;i<str.length;i++){
        temp=temp+str[str.length-i-1];
    }
    return temp;
}

function palindrome(kata){
    if(kata==balikString(kata)){
        return true;
    } else{
        return false;
    }
}


// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false