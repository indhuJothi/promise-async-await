const fs = require('fs')

//The Fetch API is a promise-based mechanism, and calling fetch() is equivalent to defining our own promise using new Promise().

const fileName = (fileName)=>{
    return new Promise((resolve,reject)=>{
         fs.readFile(fileName,(err,data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(JSON.parse(data))
            }
        })
    })
}

fileName('fetch.json')
.then((data)=>console.log(data)).catch((err)=>{console.log(err)})