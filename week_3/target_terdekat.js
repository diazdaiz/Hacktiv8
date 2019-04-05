function targetTerdekat(arr) {
    var i,o,cek_x,jarak_terdekat;
    jarak_terdekat=0;
    cek_x=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]=="o"){
            o=i;
        }
    }
    for(i=0;i<arr.length;i++){
        if(((arr[i]=="x")&&(Math.abs(i-o)<jarak_terdekat))||((arr[i]=="x")&&(cek_x==0))){
            jarak_terdekat=Math.abs(i-o);
            cek_x=1;
        }
    }
    return jarak_terdekat;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2