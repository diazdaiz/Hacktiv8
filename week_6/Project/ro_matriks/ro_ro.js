
function roperasi(matriks, attach, operasi=-1, id1=-1, id2=-1, s=-1, id3=-1){	//menambah/mengurangi roperasi
	if(attach==1){
		matriks[id1].ro.bo=matriks[id1].ro.bo+1;			//bila bertambah ro nya, bertambah 1 rangkaian operasi
		matriks[id1].ro.op[matriks[id1].ro.bo]=operasi;		//operasi matriks id1 yang ke "bo" = (kode) operasi, kode operasi bisa dilihat di switch(operasi)
		switch(operasi){ //1=+, 2=-, 3=xs, 4=:s, 5=xm, (6=determinant), 7=cofactor, 8=transpose, 9=adjoint, 10=inverse
			case 1: case 2: case 5:
				matriks[id1].ro.idi[matriks[id1].ro.bo]=id2;
				break;
			case 3: case 4:
				matriks[id1].ro.ds[matriks[id1].ro.bo]=s;
				break;
			//tidak terdapat case 6 karena determinant merupakan fungsi(mempunyai keluaran dengan tipe data double)
			case 7: case 8: case 9: case 10:
				matriks[id1].ro.idi[matriks[id1].ro.bo]=-1;	//-1 agar save file terlihat lebih rapih
				break;
		}
		if(id3!=-1){	//mengeset ido(id output keluaran rangkaian operasi) bila belum mempunyai ido sebelumnya
			matriks[id1].ro.ido=id3;	
		}
	}
	else if(attach==0){	//bila hanya ingin mengubah id output
		matriks[id1].ro.ido=id3;
	}
	else if(attach<0){	//menghapus ro terakhir sebanyak "-attach"
		matriks[id1].ro.bo=matriks[id1].ro.bo-attach;
		if(matriks[id1].ro.bo<0){	//hanya mengamankan agar pengurangan rangkaian operasi tidak sampai kurang dari 0
			matriks[id1].ro.bo=0;
		}
	}
}
	
function parent(matriks, parenting, id1, id2=-1){	//berfungsi untuk memberi parent(/unparent) pada id1, dimana id1 akan juga menjalankan ro dari parent setelah data ro id1 di translate pada fungsi tdroperasi
	if(parenting==1){
		matriks[id1].parent.cek=1;	//1 berarti mempunyai parent
		matriks[id1].parent.id=id2;
	}
	if(parenting==0){
		matriks[id1].parent.cek=0;	//0 berarti tidak mempunyai parent
		matriks[id1].parent.id=id2;
	}
}

function tdroperasi(matriks, id1, id_pengoperasi=-1, cek_op=0){	//translate(menjalankan ro) data rangkaian operasi(termasuk rangkaian operasi dari parent)
	var i, id_dioperasi;		//id_dioperasi, id yg dioperasi
	if(id_pengoperasi==-1){	    //-1 diartikan sebagai belum masuk ke tdparentnya (tdparent, translate data parent, yaitu saat ro parent sudah mulai mengoperasi)
		id_pengoperasi=id1;		//karena belom masuk ke tdparent, berarti yg mengoperasi id_dioperasi adalah ro dari id1
	}
	for(i=1;i<=matriks[id_pengoperasi].ro.bo;i++){
		id_dioperasi=id1;
		if(cek_op==1){	//kalau misalnya id1 sudah dioperasikan at least 1 kali, maka selanjutnya yg dioperasikan matriks.ro.ido 
			id_dioperasi=matriks[id1].ro.hro;
		}
		cek_op=1;		//menandakan id1 pernah dioperasikan
		switch(matriks[id1].ro.op[i]){
			case 1:
				tambah(matriks, id_dioperasi, matriks[id_pengoperasi].ro.dm[i], matriks[id1].ro.hro);
				break;
			case 2:
				kurang(matriks, id_dioperasi, matriks[id_pengoperasi].ro.dm[i], matriks[id1].ro.hro);
				break;
			case 3:
				kali_s(matriks, id_dioperasi, matriks[id_pengoperasi].ro.ds, matriks[id1].ro.hro);
				break;
			case 4:
				bagi(matriks, id_dioperasi, matriks[id_pengoperasi].ro.ds, matriks[id1].ro.hro);
				break;
			case 5:
				kali_m(matriks, matriks[id_pengoperasi].ro.dm[i], id_dioperasi, matriks[id1].ro.hro);	//id_dioperasi dibelakang, karena id_pengoperasi bertindak sebagai transformator 
				break;
			//tidak ada case 6. untuk 6 langsung mereturn nilai
			case 7:
				cofactor(matriks, id_dioperasi, matriks[id1].ro.hro);
				break;
			case 8:
				transpose(matriks, id_dioperasi, matriks[id1].ro.hro);
				break;
			case 9:
				adjoint(matriks, id_dioperasi, matriks[id1].ro.hro);
				break;
			case 10:
				inverse(matriks, id_dioperasi, matriks[id1].ro.hro);
				break;
		}
	}
	if(matriks[id_pengoperasi].parent.cek==1){	//bila id_pengoperasi punya parent, maka id parent dari id_pengoperasi yg selanjutnya mengoperasi id_dioperasi
		tdroperasi(matriks, id1, matriks[id_pengoperasi].parent.id, cek_op);
	}
}

