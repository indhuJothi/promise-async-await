const promise = new Promise((resolve,reject)=>{
    let done = true;

    if(done){
        resolve('I am done')
    }
    else{
        reject('I am not done')
    }

})

promise.then((getRes)=>{console.log(getRes)}).catch((err)=>{console.log(err)})