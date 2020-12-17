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