/*
=====================
DOUBLE REVERSE ARRAY
=====================

[INSTRUCTION]
Terdapat function doubleReverse yang menerima parameter berupa array of string , 
function ini akan membalik elemen array, string yang berada di dalam elemen array juga akan dibalik jika panjang string GENAP

[EXAMPLE]
input: ['hari', 'senin', 'makan', 'sushi', 'enak']
proses: membalik isi array, dan membalik elemen array yang panjang katanya genap
output: [ 'kane', 'sushi', 'makan', 'senin', 'irah' ]

[RULES]
- Function bawaan javascript yang boleh digunakan hanyalah .push dan .length
*/
function balik_string(str){
  var str2;
  str2=[];
  for(i=0;i<str.length;i++){
    str2.push(str[str.length-i-1]);
  }
  str="";
  for(i=0;i<str2.length;i++){
      str=str+str2[i];
  }
  return str;
}

function doubleReverse(arr) {
  var i,arr2;
  if(arr.length==0){
    return "invalid input parameter";
  } else{
    arr2=[];
    for(i=0;i<arr.length;i++){
      arr2.push(0);
    }
    for(i=0;i<arr.length;i++){
      if(arr[arr.length-i-1].length%2==1){
        arr2[i]=arr[arr.length-i-1];
      } else{
        arr2[i]=balik_string(arr[arr.length-i-1]);
      } 
    }
  }
  return arr2;
}

console.log(doubleReverse(['hari', 'senin', 'makan', 'sushi', 'enak']));
//[ 'kane', 'sushi', 'makan', 'senin', 'irah' ]
console.log(doubleReverse(['winter', 'is', 'coming']));
// [ 'gnimoc', 'si', 'retniw' ]
console.log(doubleReverse(['valar', 'morghulis', 'valar', 'dohaeris']));
//[ 'sireahod', 'valar', 'morghulis', 'valar' ]
console.log(doubleReverse([]))
// invalid input parameter