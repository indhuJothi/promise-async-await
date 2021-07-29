const doSomething = ()=>{
    return new Promise((resolve,reject)=>{
        if(2>1){
            resolve('I am done')
        }
        else{
            reject('I am not done')
        }
    })
}
const asyncFunc = async ()=>{
    console.log( await(doSomething()))
}

console.log("I am before")
asyncFunc()
console.log("I am after but will print before the asyncFunc")
