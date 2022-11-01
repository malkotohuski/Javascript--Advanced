function listOfNames(arr){
    let count = lengt
    let listName = arr.sort()

    listName.forEach(name => {
        count++;
        console.log(`${count}.${name}`);
    });
}

listOfNames(["John",
"Bob",
"Christina",
"Ema"])




function sortingNumber(input) {
    let sort = input.sort((a, b) => a - b)
    let bigNumbers = (sort.splice(sort.length / 2, sort.length - 1)).reverse()
    let arr = []
 
    for (let i = 0; i < sort.length; i++) {
        arr.push(sort[i], bigNumbers[i])
    }
   return arr
 
}