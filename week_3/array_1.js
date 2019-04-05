function balikString(str){
    var i;
    var temp="";
    for(i=0;i<str.length;i++){
        temp=temp+str[str.length-i-1];
    }
    return temp;
}

console.log(balikString("hello world!"));