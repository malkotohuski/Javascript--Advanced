function townPopulation(data){
    let result = {};
   for(let town of data){
        let [name, population] = town.split(' <-> ');
        population = Number(population);

        if(result[name] !== undefined) {population+= result[name];}
                result[name] =population;
            }

            for(let town in result){
                console.log(`${town} : ${result[town]}`);
            }
        }
   

townPopulation(['Sofia <-> 1200000',

'Montana <-> 20000',

'New York <-> 10000000',

'Washington <-> 2345000',

'Las Vegas <-> 1000000']);