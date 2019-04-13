function changeMe(arr) {
    var i,output,tahun,umur;
    tahun=2019;
    output={};
    umur=[];
    for(i=0;i<arr.length;i++){
        if((tahun-arr[i][3])>=0){
            umur.push(tahun-arr[i][3])
        } else{
            umur.push("Invalid Birth Year")
        }
        output[i+1+". "+arr[i][0]+arr[i][1]]={
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: umur[i]
        }
    }
    console.log(output)
}
  
// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""

