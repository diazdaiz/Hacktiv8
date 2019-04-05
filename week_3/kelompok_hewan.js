function groupAnimals(animals) {
    var alph="abcdefghijklmnopqrstuvwxyz";
    var urut=[];
    var urut_child=[];
    var i,j,k;
    for(i=0;i<alph.length;i++){
        for(j=0;j<animals.length;j++){
            if(alph[i]==animals[j][0]){
                urut_child.push(animals[j]);
            }
        }
        if(urut_child.length!=0){
            urut.push(urut_child);
            urut_child=[];
        }
    }
    return urut;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]