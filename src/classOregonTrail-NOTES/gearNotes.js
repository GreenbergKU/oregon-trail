class Gear {
    constructor(type, quantity) {
        this.validType = [
            'food',
            'ammunition',
            'clothes',
            undefined,
        ];
        this.type = this.validType.includes(type) ? type : undefined; 
        // from spaceport/src/part.js
            // this.validType = ['landing gear', 'shell', 'hyperdrive', 'computer', 'life support', undefined]
            //this.type = this.validType.includes(object.type) ? object.type : undefined;
        this.quantity = quantity;   
    }
}

module.exports = Gear;
//npm test test/gear-test.js

