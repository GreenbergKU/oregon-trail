class Part {
    constructor(type) {
        this.type = type;
        this.validTypes = ['wheel', 'yoke', 'axle', 'ox', undefined];
        this.type = this.validTypes.includes(this.type) ? this.type : undefined;
        this.broken = false;
    };

    break() {
        this.broken = true;
    };

    repair() {
        this.broken = true !== this.hasBeenRepaired ? false : true;
        this.broken = !this.hasBeenRepaired ? false : true;
        this.hasBeenRepaired = true;
    };

};


module.exports = Part;
// npm test test/part-test.js


// from spaceport/src/part.js
        // this.validType = ['landing gear', 'shell', 'hyperdrive', 'computer', 'life support', undefined]
        // this.type = this.validType.includes(object.type) ? object.type : undefined;