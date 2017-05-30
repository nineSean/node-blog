//Promise

//typeof Promise === 'function'

//prototype ==> then/catch

//静态方法 ==> all/race/resolve/reject

//step1  new Promise()

let foo = new Promise((resolve, reject) => {
  reject(1)
  // resolve(3)
})

console.log(foo)

//then可以接受2个参数，第一个参数处理resolve的结果
//第二个参数处理reject的结果

foo.then(val =>
  //处理resolve的结果
  console.log(`resolve value is ${val}`), val =>
  //处理reject的结果
  console.log(`reject value is ${val}`)
)

//只能接受一个参数，处理reject层面
foo.catch(val=>console.log(`catch value is ${val}`))
