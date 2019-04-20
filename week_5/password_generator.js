function changeVocals (str) {
    var i,j,alph,ALPH,kata;
    kata="";
    alph="abefijopuv"
    ALPH="ABEFIJOPUV"
    for(i=0;i<str.length;i++){
        for(j=0;j<=alph.length;j=j+2){
            if(str[i]==alph[j]){
                kata=kata+alph[j+1];
                break;
            }else if(str[i]==ALPH[j]){
                kata=kata+ALPH[j+1];
                break;
            }else if(j==alph.length){
                kata=kata+str[i];
            }
        }
    }
    return kata;
}
  
function reverseWord (str) {
    var i,kata;
    kata="";
    for(i=0;i<str.length;i++){
        kata=kata+str[str.length-i-1];
    }
    return kata;
}
  
function setLowerUpperCase (str) {
    var i,j,alph,ALPH,kata;
    alph="abcdefghijklmnopqrstuvwxyz"
    ALPH="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    kata="";
    for(i=0;i<str.length;i++){
        for(j=0;j<=alph.length;j++){
            if(str[i]==alph[j]){
                kata=kata+ALPH[j];
                break;
            } else if(str[i]==ALPH[j]){
                kata=kata+alph[j];
                break;
            } else if(j==26){
                kata=kata+str[i];
            }
        }
    }
    return kata;
}
  
function removeSpaces (str) {
    var i,kata;
    kata="";
    for(i=0;i<str.length;i++){
        if(str[i]!=" "){
            kata=kata+str[i];
        }
    }
    return kata;
}
  
function passwordGenerator (name) {
    if(name.length<5){
        return "Minimal karakter yang diinputkan adalah 5 karakter"
    }else{
        return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
    }
}

console.log(changeVocals("uyE az"));
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'