const fs = require('fs');
const path = require('path');

const getProductsFromFile = (cb)=>{
    
}
module.exports = class Product {
    constructor(t){
        this.title = t;
    }
    save(){
        const p = path.join(path.dirname(require.main.filename), 
        'data', 'products.json');
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent)
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {

            }); 
        });
    };


    static fetchAll(cb){ //the static keyword makes sure you can call the fetchAll method directly on the class
        const p = path.join(path.dirname(require.main.filename), 
        'data', 'products.json');
        fs.readFile(p, (err, fileContent) => {
            if (err){
                cb([]);
            }
            cb(JSON.parse(fileContent));  //use JSON.parse to return back as an Array 
        }); 
    }
};