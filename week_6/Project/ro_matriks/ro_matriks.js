class Parent{
    constructor(cek,idp){
            this.cek=cek;
            this.idp=idp;
    }
}

class Ro{
    constructor(bo,op,dm,ds,hro){
        this.bo=bo;
        this.op=op;
        this.dm=dm;
        this.ds=ds;
        this.hro=hro;
    }
}

class Matriks{
    constructor(nama,jbaris,jkolom,komponen,bo,op,dm,ds,hro,cek,idp){
        this.nama=nama;
        this.jbaris=jbaris;
        this.jkolom=jkolom;
        this.komponen=komponen;
        this.ro=new Ro(bo,op,dm,ds,hro);
        this.parent=new Parent(cek,idp);
    }
}

// var matriks,i;
// matriks=[];
// for(i=0;i<500;i++){
//     matriks.push(new Matriks("null",1,1,[[0]],0,[0],[0],[0.0],[-1],0,[-1]));
// }