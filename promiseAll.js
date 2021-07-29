const fs = require('fs')

const f1 = require('./fetch.json')
const f2 = require('./second.json')

Promise.all([f1,f2]).then((res)=>{
    console.log('Its is a res: ', res)
}).catch((err)=>{console.log(err)})


