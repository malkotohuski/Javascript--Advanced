function biggerHalf(arr) {


    let data = arr.sort((a, b) => a - b);
    let newArr = data.length / 2;
    let result = data.slice(newArr)
   

    console.log(result);
}
biggerHalf([4, 7, 2, 5]);