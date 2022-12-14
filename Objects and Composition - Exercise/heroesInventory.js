function heroesInventory(input) {
    let heroes = [];

    for(let line of input) {
        let tokens = line.split(/\s*\/\s*/);
        let name = tokens[0];
        let level = Number(tokens[1]);
        let items = [];

        if(tokens.length > 2) {
            items = tokens[2].split(", ");
        }

        let hero = {name: name, level: level, items: items};
        heroes.push(hero);
    }

    console.log(JSON.stringify(heroes));
}

heroesInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);