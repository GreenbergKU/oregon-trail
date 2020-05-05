class Settler {
    constructor(traveler) {
        this.name = traveler.name;
        this.age = traveler.age;
        this.nationality = traveler.nationality || 'unknown';
        this.statusList = [
            'healthy',
            'fair',
            'poor',
            'dead',
        ];
        this.status = this.statusList.includes(traveler.status) ? traveler.status : 'healthy';
        this.ailments = [];   
    }

    experienceDistress(ailment) {
        this.ailments.length < 3 ? this.ailments.push(ailment) : this.ailments;
        this.findStatus();            
            
            console.log(
                'A', this.ailments, 
            )
    }

    findStatus() {
        this.status = this.statusList[this.ailments.length];
            
            console.log(
                'B', this.status,
                'C', this.ailments.length,
            )
    }

    heal() {
        this.status !== 'dead' ? this.ailments = [] : this.ailments;
        this.findStatus();
            
            console.log(
                'D', this.status,
                'F', this.ailments.length,
            )   
    }
}

module.exports = Settler;
    // npm test test/settler-test.js

