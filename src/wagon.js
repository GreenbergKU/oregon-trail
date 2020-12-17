class Wagon {
    constructor(wagon) {
        this.name = wagon.name;
        this.wheels = wagon.wheels || [];
        this.axles = wagon.axles || [];
        this.oxen = wagon.oxen || [];
        this.yokes = wagon.yokes || [];
        this.food = wagon.food;
        this.ammunition = wagon.ammunition;
        this.clothes = wagon.clothes;
        this.settlers = wagon.settlers || [];
    };
    
    addPart(part) {
        if(part.type === 'wheel') this.wheels.push(part);
        if(part.type === 'axle') this.axles.push(part);
        if(part.type === 'ox') this.oxen.push(part);
        if(part.type === 'yoke') this.yokes.push(part);
    };

    canTravel() {
        return (
            this.wheels.filter(part => !part.broken).length >= 4 &&
            this.axles.filter(part => !part.broken).length >= 2 &&
            this.oxen.filter(part => !part.broken).length >= 2 &&
            this.yokes.filter(part => !part.broken).length >= 1 &&
            Math.floor(this.oxen.length / 2) === this.yokes.length && 
            this.settlers.filter(settler => settler.status != 'dead').length > 0
        );
    };

};


module.exports = Wagon;
// npm test test/wagon-test.js 
    

/////////////// NOTES /////////////////
///////////////////////////////////////

//     addPart(part) {
//         //type === "ox" ? `this.${type}en.push('${type}')`:
//         //`this.${type}s.push(${type})`;
//         //push(`${part}`);        
//         //var parts = `${part.type}s`;
//         //`(this.${part.type}s).push(${part.type})`;
//         //this.parts ;
//         //push(this.parts);;
//         //`this.(${part.type}+s).push(part)`

        
//         console.log("1", `this.${part.type}s`, "2", parts, "3", this.parts);
//         console.log('A', `${part.type}s`)
//         console.log('B', parts, 'C', `${part.type}`, 'D', this)

//    }

    // break(array, index) {
    //     var index = 0;
    //     array.splice(index, 1);
        
    // }

    // break() {[
        
    //     this.wheels.splice(part),
    //     this.axles.splice(part),
    //     this.oxen.splice(part),
    //     this.yokes.splice(part),
    // ]}
    
  
            
            
            // console.log("1", this, "2", part, "3", this.wheels);
            // console.log('A', `${part.type}s`);
            // console.log('B', part, 'C', part.type);
    
    /*
    canTravel() {
        console.log("this:", this);
        console.log("broken:", this.wheels.filter(wheel => !wheel.broken).length < 4);
        console.log("notDead:", this.settlers.filter(settler => settler.status != 'dead').length);
        return (
            this.wheels.filter(part => !part.broken).length < 4 ||
            this.axles.filter(part => !part.broken).length < 2 ||
            this.oxen.filter(part => !part.broken).length < 2 ||
            this.yokes.filter(part => !part.broken).length < 1 ||
            Math.floor(this.oxen.length / 2) !== this.yokes.length || 
            this.settlers.filter(settler => settler.status != 'dead').length < 1
            ? false : true
        );
    }
    */

