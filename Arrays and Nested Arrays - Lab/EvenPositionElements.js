function EvenPositionElements(arr) {

    let newArr ='';
    for (let i = 0; i < arr.length; i+=2) {
        newArr += arr[i];
        newArr += ' ';
    }
    console.log(newArr);
}

EvenPositionElements(['20', '30', '40',
    '50', '60']);