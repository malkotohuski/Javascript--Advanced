function calorieObject(data) {

    let result = {};

    for (let i = 0; i < data.length; i += 2) {
        result[data[i]] = data[i + 1];
    }
    console.log(result);
}


calorieObject(['Yoghurt', '48', 'Rise', '138',
    'Apple', '52']);