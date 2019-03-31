function balikKata(kata) {
    var temp1="";
    var i;
    for(i=0;i<kata.length;i++){
        temp1=temp1+kata[kata.length-i-1];
    }
    return temp1;
}

  
// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS