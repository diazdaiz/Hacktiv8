function tambah(matriks,id1,id2,id3){
	if((matriks[id1].jbaris==matriks[id2].jbaris)&&(matriks[id1].jkolom==matriks[id2].jkolom)){
		var mtemp=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
		var i,j;
		matriks[id3].jbaris=matriks[id1].jbaris;
		matriks[id3].jkolom=matriks[id1].jkolom;
		for(i=1; i<=matriks[id1].jbaris; i++){
			for(j=1; j<=matriks[id1].jkolom; j++){
				mtemp[i][j]=matriks[id1].komponen[i][j]+matriks[id2].komponen[i][j];
			}
		}
		for(i=1; i<=matriks[id3].jbaris; i++){
			for(j=1; j<=matriks[id3].jbaris; j++){
				matriks[id3].komponen[i][j]=mtemp[i][j];
			}
		}
	}
}

function kurang(matriks, id1, id2, id3){
	if((matriks[id1].jbaris==matriks[id2].jbaris)&&(matriks[id1].jkolom==matriks[id2].jkolom)){
		var mtemp=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
		var i,j;
		matriks[id3].jbaris=matriks[id1].jbaris;
		matriks[id3].jkolom=matriks[id1].jkolom;
		for(i=1; i<=matriks[id1].jbaris; i++){
			for(j=1; j<=matriks[id1].jkolom; j++){
				mtemp[i][j]=matriks[id1].komponen[i][j]-matriks[id2].komponen[i][j];
			}
		}
		for(i=1; i<=matriks[id3].jbaris; i++){
			for(j=1; j<=matriks[id3].jkolom; j++){
				matriks[id3].komponen[i][j]=mtemp[i][j];
			}
		}
	}
}

function kali_s(matriks, id1, s, id2){
    var mtemp=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
    var i,j;
	matriks[id2].jbaris=matriks[id1].jbaris;
	matriks[id2].jkolom=matriks[id1].jkolom;
	for(i=1; i<=matriks[id1].jbaris; i++){
		for(j=1; j<=matriks[id1].jkolom; j++){
			mtemp[i][j]=s*matriks[id1].komponen[i][j];
		}
	}
	for(i=1; i<=matriks[id2].jbaris; i++){
		for(j=1; j<=matriks[id2].jkolom; j++){
			matriks[id2].komponen[i][j]=mtemp[i][j];
		}
	}
}

function bagi(matriks, id1, s, id2){
	s=1/s;
	kali_s(matriks, id1, s, id2);
}

function kali_m(matriks, id1, id2, id3){
	if(matriks[id1].jkolom==matriks[id2].jbaris){
		var mtemp=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
		var i,j,k,x;
		matriks[id3].jbaris=matriks[id1].jbaris;
		matriks[id3].jkolom=matriks[id2].jkolom;
		for(i=1; i<=matriks[id3].jbaris; i++){
			for(j=1; j<=matriks[id3].jkolom; j++){	
				x=0;
				for(k=1; k<=matriks[id1].jkolom; k++){ //atau k<=matriks[id2].jbaris juga bisa sebenernya
					x=x+(matriks[id1].komponen[i][k]*matriks[id2].komponen[k][j]);
				}
				mtemp[i][j]=x;
			}
		}
		for(i=1; i<=matriks[id3].jbaris; i++){
			for(j=1; j<=matriks[id3].jkolom; j++){
				matriks[id3].komponen[i][j]=mtemp[i][j];
			}
		}
	}
}

function determinant(matriks, id1)		//referensi : https://stackoverflow.com/questions/21220504/matrix-determinant-algorithm-c
{	
    var temp=[];
    temp.push(new Matriks("null",3,3,[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],0,[0],[0],[0.0],[-1],0,[-1]));
    var det,k1b,ni,nj,i,j; //k1b = kolom 1 baris ..., ni = new i, nj = new j
	det=0;
	temp[0].jbaris=matriks[id1].jbaris-1;	//jumlah kolom juga bisa
	if(matriks[id1].jbaris==1){
    	return matriks[id1].komponen[1][1];
	}
	else{
		for(k1b=1;k1b<=matriks[id1].jbaris;k1b++){
			ni=1;
			nj=1;
			for(i=1;i<=matriks[id1].jbaris;i++){
				for( j=2;j<=matriks[id1].jbaris;j++){
					if(i!=k1b){
						temp[0].komponen[ni][nj]=matriks[id1].komponen[i][j];
						nj=nj+1;
						if(nj==matriks[id1].jbaris){
							ni=ni+1;
							nj=1;
						}
					}
				}
			}
			det=det-matriks[id1].komponen[k1b][1]*Math.pow(-1,k1b)*determinant(temp, 0);
		}
		return det;
	}
}

function cofactor(matriks, id1, id2){
    var temp=[];
	var elemb, elemk, i, j, ni, nj;		//eleminasi baris, eleminasi kolom, i, j, new i, new j
    for(i=0;i<2;i++){
        temp.push(new Matriks("null",3,3,[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],0,[0],[0],[0.0],[-1],0,[-1]));
    }
    matriks[id2].jbaris=matriks[id1].jbaris;
	matriks[id2].jkolom=matriks[id1].jkolom;	
	temp[0].jbaris=matriks[id1].jbaris-1;
	for(elemb=1; elemb<=matriks[id2].jbaris; elemb++){
		for(elemk=1; elemk<=matriks[id2].jbaris; elemk++){
			ni=1;
			nj=1;
			for(i=1; i<=matriks[id1].jbaris; i++){
				for(j=1; j<=matriks[id1].jkolom; j++){
					if((i!=elemb)&&(j!=elemk)){
						temp[0].komponen[ni][nj]=matriks[id1].komponen[i][j];
						nj=nj+1;
						if(nj==matriks[id1].jkolom){
							nj=1;
							ni=ni+1;
						}
					}
				}
			}
			temp[1].komponen[elemb][elemk]=Math.pow(-1,elemb)*Math.pow(-1,elemk)*determinant(temp,0);
		}
	}
	for(i=1; i<=matriks[id2].jbaris; i++){
		for(j=1; j<=matriks[id2].jkolom; j++){
			matriks[id2].komponen[i][j]=temp[1].komponen[i][j];
		}
	}
}

function transpose(matriks, id1, id2){
	var mtemp=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
	var i,j;
	matriks[id2].jbaris=matriks[id1].jkolom;
	matriks[id2].jkolom=matriks[id1].jbaris;
	for(i=1;i<=matriks[id1].jbaris;i++){
		for(j=1;j<=matriks[id1].jkolom;j++){
			mtemp[j][i]=matriks[id1].komponen[i][j];
		}
	}
	for(i=1;i<=matriks[id2].jbaris;i++){
		for(j=1;j<=matriks[id2].jkolom;j++){
			matriks[id2].komponen[i][j]=mtemp[i][j];
		}
	}
}

function adjoint(matriks, id1, id2){
	cofactor(matriks, id1, id2);
	transpose(matriks, id2, id2);
}

function inverse(matriks, id1, id2){
	adjoint(matriks, id1, id2);
	bagi(matriks, id2, determinant(matriks, id1), id2);
}