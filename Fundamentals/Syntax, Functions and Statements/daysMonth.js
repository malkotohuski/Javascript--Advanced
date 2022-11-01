function daysMonth(mount, year){

    return new Date(year, mount, 0).getDate();
}

daysMonth(1, 2012)