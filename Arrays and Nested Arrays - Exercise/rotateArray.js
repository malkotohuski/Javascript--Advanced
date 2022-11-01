function extract(arr) {
 
    arr = arr.map(Number);
    let result = [arr[0]];
    let biggestNumber = [arr[0]];
 
    for (let i = 1; i < arr.length; i++) {
 
        let currentNumber =arr[i];
 
        if (currentNumber >= biggestNumber) {
            result.push(currentNumber);
            biggestNumber = currentNumber;
        }
    }
 
    return result
}
extract([1, 2, 3, 4])



