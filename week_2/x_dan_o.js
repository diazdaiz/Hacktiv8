function xo(str) {
  var i,x,o;
  x=0;
  o=0;
  for(i=0;i<str.length;i++){
    if(str[i]=="x"){
      x=x+1;
    }
    if(str[i]=="o"){
      o=o+1;
    }
  }
  if(x==o){
    return true;
  } else{
    return false;
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true