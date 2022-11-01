function sumFirstLast(arr){

    
    
    let firstPara = arr[0];
    let secoundPara = arr.pop();
    let sum = Number(firstPara) + Number(secoundPara);
    console.log(sum);

}

sumFirstLast(['20', '30', '40']);