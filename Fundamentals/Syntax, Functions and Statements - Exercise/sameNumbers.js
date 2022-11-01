function sameNumbers(number) {

    let numAsString = number + "" //  number.ToString()
    let firstDigit = numAsString[0];
    let isSame = true;
    let sum = 0
    for (i = 0; i < numAsString.length; i++) {
        if (numAsString[i] !== firstDigit) {
            isSame = false;
        }
        sum += Number(numAsString[i]);
    }

    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222)