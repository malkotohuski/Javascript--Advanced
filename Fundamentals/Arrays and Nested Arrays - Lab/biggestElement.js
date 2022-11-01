function biggestElemnt(arr) {
    let maxElement = Number.MIN_SAFE_INTEGER;

    for (let el of arr) {
        for (let num of el) {
            if (num > maxElement)
            {
                maxElement = num;
            }
        }
    }

    return maxElement;
}
biggestElemnt([[20, 50, 10],
[8, 33, 145]]);
