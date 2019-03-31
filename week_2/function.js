function shoutOut(){
    return "Halo Function!";
}

console.log(shoutOut()); // Menampilkan "Halo Function!" di console
console.log();



function calculateMultiply(angka_1,angka_2){
    return angka_1*angka_2;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30
console.log();



function processSentence(nama,umur,alamat,hobi){
    var kalimat;
    kalimat="Nama saya "+nama+", umur saya "+umur+" tahun, alamat saya di "+alamat+", dan saya punya hobby yaitu "+hobi+"!";
    return kalimat;
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!