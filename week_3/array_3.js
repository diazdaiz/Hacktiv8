function dataHandling2(input){
    input.splice(1,2,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    console.log(input);
    var tgl,bulan;
    tgl=input[3].split("/");
    tgl[0]=parseInt(tgl[0]);
    tgl[1]=parseInt(tgl[1]);
    tgl[2]=parseInt(tgl[2]);
    switch(tgl[1]){
        case 1:
            bulan="Januari";
            break;
        case 2:
            bulan="Februari";
            break;
        case 3:
            bulan="Maret";
            break;
        case 4:
            bulan="April";
            break;
        case 5:
            bulan="Mei";
            break;
        case 6:
            bulan="Juni"
            break;
        case 7:
            bulan="Juli"
            break;
        case 8:
            bulan="Agustus"
            break;
        case 9:
            bulan="September"
            break;
        case 10:
            bulan="Oktober"
            break;
        case 11:
            bulan="November"
            break;
        case 12:
            bulan="Desember"
            break;
    }
    console.log(bulan);
    var tgl_join;
    tgl_join=tgl.join("-"); //join dulu baru sort agar rapih di penanggalan (21-5-1989)
    tgl.sort();
    console.log(tgl);
    console.log(tgl_join);
    input[1]=input[1].slice(0,15);
    console.log(input[1]);

}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */