//Promise

//typeof Promise === 'function'

//prototype ==> then/catch

//静态方法 ==> all/race/resolve/reject

//step1  new Promise()

let foo = new Promise((resolve, reject) => {
  // setTimeout(resolve,2000,'data responsed')
  setTimeout(reject, 2000, 'data responsed')
})

console.log(foo)

//then可以接受2个参数，第一个参数处理resolve的结果
//第二个参数处理reject的结果

//1.then、catch方法将回调函数存入处理队列queue  （microtask ==> c++实现）
//2.如果Promise已经是fulfilled或者reject状态，则autoRun
//从数据结构的角度讲 ==> 链表  (p ==> another)
let another = foo.then(val =>
  //处理resolve的结果
  console.log(`resolve ${val}`), val =>
  //处理reject的结果
  console.log(`reject ${val}`)
)

console.log(another instanceof Promise)

//只能接受一个参数，处理reject层面
setTimeout(() => {
  console.log(foo)
  foo.catch(val => console.log(`catch reject ${val}`))
}, 2000)
