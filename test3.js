
let another = Promise.resolve({
  then: (resolve,reject)=>{
    resolve(2)
  }
})

console.log(another)//pending
setTimeout(console.log,1000,another)//resolved
