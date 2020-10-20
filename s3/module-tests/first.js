const myModule = require('./my-module')
const storage = require('./storage')


const doStuff = () =>{
    storage.getStorage().setKey('somekey','somevalue')
}


module.exports = {
    doStuff
}