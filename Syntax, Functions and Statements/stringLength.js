function stringLength(first, secound, third) {

    let firstWord = first.length;
    let secoundWord = secound.length;
    let thirdWord = third.length;
    let allLength = firstWord + secoundWord + thirdWord;
    let avgLength = allLength / 3;

    console.log(allLength);
    console.log(avgLength.toFixed(0));

}

stringLength('chocolate', 'ice cream', 'cake');