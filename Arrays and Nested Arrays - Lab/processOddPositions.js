function solve(arr) {
    let reversedArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 != 0)
        {
            reversedArr.push(arr[i] * 2);
        }
    }

    return reversedArr.reverse();
}

solve([3, 0, 10, 4, 7, 3]);

