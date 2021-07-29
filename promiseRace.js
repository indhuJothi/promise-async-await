const f1 = require('./fetch.json')
const f2 = require('./second.json')
const first = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, f1)
  })
  const second = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, f2)
  })
  
  Promise.race([first, second]).then(result => {
    console.log(result) 
  })