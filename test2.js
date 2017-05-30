// let t = Promise.resolve(1)
// let another = Promise.resolve(t)

// console.log(t)
// console.log(another)

let another = Promise.resolve({
  then: (resolve,reject)=>{
    resolve(2)
  }
})

setTimeout(console.log,1500,another)
