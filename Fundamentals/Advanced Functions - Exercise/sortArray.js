function sortArray(numbers, command) {

    if (command === "asc") {
        return (numbers.sort((a, b) => a - b));
    } else {
        return (numbers.sort((a, b) => b - a));
    }
}
sortArray([14, 7, 17, 6, 8], 'asc');