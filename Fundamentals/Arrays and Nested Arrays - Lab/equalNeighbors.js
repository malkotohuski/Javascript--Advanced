function equalNeighbors(arr) {
    let pairCount = 0;

    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col < arr[row].length; col++) {
            if (row < arr.length - 1) {
                if (arr[row][col] === arr[row + 1][col]) {
                    pairCount++;
                }
                if (arr[row][col] === arr[row][col + 1]) {
                    pairCount++;
                }
            }
            else
            {
                if (arr[row][col] === arr[row][col + 1]) {
                    pairCount++;
                }  
            }
        }
    }
    
    return pairCount;
}

equalNeighbors([['2', '3', '4', '7', '0'],

['4', '0', '5', '3', '4'],

['2', '3', '5', '4', '2'],

['9', '8', '7', '5', '4']]);