const Contenedor = require('../desafioDos/method.js');

const products = new Contenedor('../RoxanaGonzalez/desafioDos/products.txt');

const test = async () => {
    let save = await products.save({
        title: "Pop Wanda Vision",
        price: "4000",
        thumbnail: "https://www.tradeinn.com/f/13813/138135767/funko-pop-marvel-wandavision-bruja-escarlata.jpg",
        id: 5
    });
    let getAll = await products.getAll();
    let getById = await products.getById(5);
    let deleteById = await products.deleteById(2);
    // let deleteAll = await products.deleteAll();
    console.log(save);
    console.log(getAll);
    console.log(getById);
    console.log(deleteById);
    // console.log(deleteAll)
};

test();