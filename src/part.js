class Part {
    constructor(type) {
        this.validTypes = [
            'wheel', 
            'yoke', 
            'axle', 
            'ox',
            undefined,
        ];
        this.type = this.validTypes.includes(type) ? type:undefined;
        this.broken = false;
    }

    break() {
        this.broken = true;
    }
        
    repair() {
        this.broken = true !== this.hasBeenRepaired ? false:true;
        this.hasBeenRepaired = true;
    }       
}

module.exports = Part;
// npm test test/part-test.js