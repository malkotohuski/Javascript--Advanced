function timeToWalk(steps, length, speed) {

    let distanceMeters = steps * length;
    let speedMeters = speed / 3.6;
    let time = distanceMeters / speedMeters;
    let res = Math.floor(distanceMeters / 500);

    let timeMinute = Math.floor(time / 60);
    let timeSecound = Number((time - (timeMinute * 60)).toFixed(0));
    let timeInHour = Math.floor(time / 3600);
    timeMinute += res;
    timeInHour += Math.floor(timeMinute / 60);
    timeMinute = timeMinute % 60;

    let formatHours = timeInHour < 10 ? `0${timeInHour}` : `${timeInHour}`;
    let fromatMinute = timeMinute < 10 ? `0${timeMinute}` : `${timeMinute}`;
    let fromatSecound = timeSecound < 10 ? `0${timeSecound}` : `${timeSecound}`;
    console.log(`${formatHours}:${fromatMinute}:${fromatSecound}`);

}

timeToWalk(4000, 0.60, 5);