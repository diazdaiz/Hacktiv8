function shoppingTime(memberId, money) {
    var i,list,output,list_purchased,change_money,list_keys;
    if((memberId!=undefined)&&(memberId!="")){
        list={
            "Sepatu Stacattu":1500000,
            "Baju Zoro":500000,
            "Baju H&N":250000,
            "Sweater Uniklooh":175000,
            "Casing Handphone":50000,
        }
        list_purchased=[];
        change_money=money;
        list_keys=Object.keys(list);
        for(i=0;i<list_keys.length;i++){
            if((change_money-list[list_keys[i]])>=0){
                change_money=change_money-list[list_keys[i]];
                list_purchased.push(list_keys[i]);
            }
        }
        output={
            "memberID":memberId,
            "money":money,
            "listPurchased":list_purchased,
            "changeMoney":change_money
        }
        if(list_purchased.length!=0){
            return output;
        }else{
            return "Mohon maaf, uang tidak cukup"
        }
    }else{
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    }
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja