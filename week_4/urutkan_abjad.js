function urutkanAbjad(str) {
    var i,j,arr,alph,temp;
    alph="abcdefghijklmnopqrstuvwxyz";
    arr=[];
    for(i=0;i<str.length;i++){
        for(j=0;j<alph.length;j++){
            if(str[i]==alph[j]){
                arr.push(j);
            }
        }
    }
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length;j++){
            if(arr[i]<arr[j]){
                temp=arr[j];
                arr[j]=arr[i];
                arr[i]=temp;
            }
        }
    }
    temp="";
    for(i=0;i<arr.length;i++){
        temp=temp+alph[arr[i]];
    }
    return temp;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'