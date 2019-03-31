var i=0;
console.log("LOOPING PERTAMA");
while(i<20){
    i=i+2;
    console.log(i+" - I love coding");
}
console.log("LOOPING KEDUA");
while(i>0){
    console.log(i+" - I will become fullstack developer");
    i=i-2;
}
console.log();



console.log("LOOPING PERTAMA");
for(i=1;i<=20;i++){
    console.log(i+" - I love coding");
}
console.log("LOOPING KEDUA");
for(i=20;i>0;i--){
    console.log(i+" - I will become fullstack developer");
}
console.log();



for(i=1;i<=100;i++){
    if(i%2==1){
        console.log("GANJIL");
    } else{
        console.log("GENAP");
    }
}
console.log();

for(i=1;i<=100;i=i+2){
    if(i%3==0){
        console.log(i+" kelipatan 3");
    }  
}
console.log();

for(i=1;i<=100;i=i+5){
    if(i%6==0){
        console.log(i+" kelipatan 6");
    }  
}
console.log();

for(i=1;i<=100;i=i+9){
    if(i%10==0){
        console.log(i+" kelipatan 10");
    }  
}