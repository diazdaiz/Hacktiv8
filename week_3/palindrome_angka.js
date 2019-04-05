function balikString(str){
    var i;
    var temp="";
    for(i=0;i<str.length;i++){
        temp=temp+str[str.length-i-1];
    }
    return temp;
}

function angkaPalindrome(num){
    var temp;
    do{
        num=num+1;
        temp=num.toString();
    } while(temp!=balikString(temp));
    return num;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001