const myModule = require("./my-module")

class SomeClass{
    constructor(name){
        this.name = name
    }
    doStuff(){
        console.log(`${this.name} is doing stuff`)
    }
}

module.exports = SomeClass