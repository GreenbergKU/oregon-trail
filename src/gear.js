class Gear {
    constructor(type, quantity) {
        this.validType = ['food', 'ammunition', 'clothes', undefined];
        this.type = this.validType.includes(type) ? type : undefined; 
        this.quantity = quantity;        
    };

};


module.exports = Gear;
