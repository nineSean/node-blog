//测试用例
const assert = require('assert')

const p = Promise.resolve(2)

const p1 = p.then(val => {
  console.log(val)
    return val+1
})
console.log(p1)

const p2 = p1.then(val => {
  console.log(val)
  assert.equal(val,3)
})

