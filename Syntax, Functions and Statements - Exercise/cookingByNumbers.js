function cookingByNumbers(number, ...commands) {

    for (let i = 0; i < commands.length; i++) {
        number =  manipolator(number, commands[i]);
    }

    function manipolator(num, command) {
        switch (command) {
            case "chop":
                num /= 2;
                console.log(num);
                break;
            case "dice":
                num = Math.sqrt(num);
                console.log(num);
                break;
            case "spice":
                num += 1;
                console.log(num);
                break;
            case "bake":
                num *= 3;
                console.log(num);
                break;
            case "fillet":
                num *= 0.8;
                console.log(num);
                break;
        }
        return num;
    }

}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
