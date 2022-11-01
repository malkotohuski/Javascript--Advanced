function smallerTwoNumbers(arr){

    let newArr = arr.sort((a, b) => a - b);

    console.log(`${newArr[0]} ${newArr[1]}`);
    
}


smallerTwoNumbers([30, 15, 50, 5]);