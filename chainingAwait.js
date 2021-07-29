const first = ()=>{
    return new Promise((resolve=>{
        setTimeout(()=>{
            resolve("I am first\n")
        },100)
    }))
    
}

const second = async()=>{
    const wait = await first()
    return wait + 'I am second\n'
}

const third = async()=>{
    const wait1 = await second()
    return wait1+"I am third "
}

third().then((res)=>{console.log(res)})