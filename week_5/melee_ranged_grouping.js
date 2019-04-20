function meleeRangedGrouping (str) {
    if(str.length!=0){
        var i,arr,ranged,melee,ranged_melee;
        ranged=[];
        melee=[];
        ranged_melee=[];
        arr=str.split(",");
        for(i=0;i<arr.length;i++){
            arr[i]=arr[i].split("-");
            if(arr[i][1]=="Melee"){
                melee.push(arr[i][0]);
            }else{
                ranged.push(arr[i][0]);
            }
        }
        ranged_melee.push(ranged,melee);
        return ranged_melee;
    }else{
        return [];
    }
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []