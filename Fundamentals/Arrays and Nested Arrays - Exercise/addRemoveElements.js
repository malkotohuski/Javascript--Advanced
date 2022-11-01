function addRemoveElements(input) {

    let result = [];
    let num = 1;

    input.forEach(element => {
        switch (element) {
            case 'add':
                result.push(num);
                num++
                break;
            case 'remove':
                result.pop();
                num++
                break;

        }
    });

    if (result.length === 0) {
        console.log(`Empty`);
    } else {
        console.log(result.join('\n'));
    }

}

addRemoveElements(['add',
    'add',
    'add',
    'add']);