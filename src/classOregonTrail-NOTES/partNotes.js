class Part {
    constructor(type) {
        // this.type = type;
        this.validTypes = [
            'wheel', 
            'yoke', 
            'axle', 
            'ox',
            undefined,
        ];
        this.type = this.validTypes.includes(type) ? type:undefined;
            // valid types are 'wheel', 'yoke', 'axle', 'ox'
            // this.type = this.validTypes.includes(type) ? type:undefined;
        this.broken = false;
            //not (boolean) broken by default
        //this.hasBeenRepaired = undefined;
    }

    break() {
        this.broken = true;
            //method break(): changes this.broken (boolean) to true, no perameter
    }
        
    repair() {
        this.broken = true !== this.hasBeenRepaired ? false:true;
        this.hasBeenRepaired = true;
            //method repair(): changes this.broken (boolean) from false to true
            //this.hasBeenRepaired (boolean) defined as true
                // if: this.broken is true AND this.hasBeenRepaired is true
                    // do: this.broken = true 
                // else: this.broken = false 
    }       
}

module.exports = Part;
// npm test test/part-test.js


    // from spaceport/src/part.js
        // this.validType = ['landing gear', 'shell', 'hyperdrive', 'computer', 'life support', undefined]
        // this.type = this.validType.includes(object.type) ? object.type : undefined;