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
    }

    addPart(part) {
        console.log('A', part);
        part.validTypes.includes(part.type) && part.type !== undefined ? [
            
            this.wheels.push(part),
            this.axles.push(part),
            this.oxen.push(part),
            this.yokes.push(part), 
        ] 
        : this;
    }

    canTravel() {
        return (
            this.wheels.length < 4 ||
            this.axles.length < 2 ||
            this.oxen.length < 2 ||
            this.yokes.length < 1 ||
            this.settlers.length < 1
                ? false:true
        )
    }

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
    break() {
        s
    }
}  
            
            
            // console.log("1", this, "2", part, "3", this.wheels);
            // console.log('A', `${part.type}s`);
            // console.log('B', part, 'C', part.type);
    



module.exports = Wagon;
    // npm test test/wagon-test.js 
    

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
