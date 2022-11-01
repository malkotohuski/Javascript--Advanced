function pieceOfPie(pies, first, end) {
    let start = pies.indexOf(first);
    let secound = pies.indexOf(end) + 1;

    let result = pies.slice(start, secound);
    return result;
}

pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie');