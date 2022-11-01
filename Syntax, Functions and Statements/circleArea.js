function circleArea(data) {

    let result;
    let inputType = typeof (data);

    if (inputType === 'number') {
        result = Math.pow(data, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }

}

circleArea(5);
circleArea('name');