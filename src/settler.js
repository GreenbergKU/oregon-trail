class Settler {
    constructor(traveler) {
        this.name = traveler.name;
        this.age = traveler.age;
        this.nationality = traveler.nationality || 'unknown';
        this.statusList = [
            'healthy',
            'fair',
            'poor',
            'dead'
        ];
        this.status = this.statusList.includes(traveler.status) ? traveler.status : 'healthy';
        //[this.ailments.length-1]
        this.ailments = [];
        
    }   
    experienceDistress(ailment) {
            //**this.ailments.push(ailment);
        this.ailments.length < 3 ? this.ailments.push(ailment) : this.ailments;
        //this.ailments < 3 ? this.ailments.push(ailment) : this.ailments;
        //< 4 ? statusIndex:this.ailments.pop(ailment)
        //statusIndex = 
        //this.ailments.push(ailment) > 3 ? this.ailments.pop() : this.ailments;
            console.log(
                //'A', statusIndex,
                'A', this.ailments, 
            )
        this.findStatus();
        //this.status = this.statusList[statusIndex > 3 ? this.ailments.pop(ailment) : statusIndex]
            //**this.ailments.length > 3 ? this.ailments.pop(ailment) : this.ailments;
        //var statusIndex = this.ailments.length;    
    }

    findStatus() {
        this.status = this.statusList[this.ailments.length]
            console.log(
                //'A', this.ailments.push(ailment), 
                'B', this.status,
                //'D', statusIndex,
                'C', this.ailments.length
            )

    }
    heal() {
        this.status !== 'dead' ? this.ailments = [] : this.ailments;
        this.findStatus();
        //this.status = this.statusList[this.ailments.length]
            console.log(
                //'A', this.ailments.push(ailment), 
                'D', this.status,
                //'D', statusIndex,
                'F', this.ailments.length
            )   
    }

}

module.exports = Settler;
// // npm test test/settler-test.js

