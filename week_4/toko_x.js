function countProfit(shoppers) {
    let listBarang = [['Sepatu Stacattu', 1500000, 10],['Baju Zoro', 500000, 2],['Sweater Uniklooh', 175000, 1]];
    var i,j,terbeli,pembeli,keuntungan,barang,output;
    terbeli=[0,0,0];
    pembeli=[[],[],[]];
    keuntungan=[0,0,0]
    output=[];
    barang={};
    for(i=0;i<shoppers.length;i++){
        for(j=0;j<listBarang.length;j++){
            if((shoppers[i].product==listBarang[j][0])&&(listBarang[j][2]-shoppers[i].amount>=0)){
                listBarang[j][2]=listBarang[j][2]-shoppers[i].amount;
                terbeli[j]=terbeli[j]+shoppers[i].amount;
                pembeli[j].push(shoppers[i].name);
            }
        }
    }
    for(i=0;i<listBarang.length;i++){
        keuntungan[i]=terbeli[i]*listBarang[i][1];
        output.push({
            "product":listBarang[i][0],
            "shoppers":pembeli[i],
            "leftOver":listBarang[i][2],
            "totalProfit":keuntungan[i]
        })
        
        
    }
    if(shoppers.length!=0){
        return output;
    }else{
        return [];
    }
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]