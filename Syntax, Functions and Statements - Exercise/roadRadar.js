function roadRadar(speed, area) {

    let result = 0

    switch (area) {
        case "motorway": result = 130; break;
        case "interstate": result = 90; break;
        case "city": result = 50; break;
        case "residential": result = 20; break;
    }
    let difference = Number(speed - result);

    if (difference <= 0) {
        console.log(`Driving ${speed} km/h in a ${result} zone`);
    } else if (difference > 0 && difference <= 20) {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${result} - speeding`);
    } else if (difference > 20 && difference <= 40) {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${result} - excessive speeding`);
    } else {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${result} - reckless driving`);
    }
}


roadRadar(40, 'city');
console.log('------------------');
roadRadar(21, 'residential');
console.log('------------------');
roadRadar(120, 'interstate');
console.log('------------------');
roadRadar(200, 'motorway');