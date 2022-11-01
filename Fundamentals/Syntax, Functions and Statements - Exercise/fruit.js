function fruit(type, weight, price){

    let kilo = weight / 1000;
    let totalPrice = kilo * price;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kilo.toFixed(2)} kilograms ${type}.`);
}

fruit('orange', 2500, 1.80)