function largestNumber(firstNum, secoundNum, lastNum) {


    if (firstNum > secoundNum && firstNum > lastNum) {
        console.log(`The largest number is ${firstNum}.`);
    } else if (secoundNum > firstNum && secoundNum > lastNum) {
        console.log(`The largest number is ${secoundNum}.`);
    } else {
        console.log(`The largest number is ${lastNum}.`);
    }
}

largestNumber(5, -3, 16);