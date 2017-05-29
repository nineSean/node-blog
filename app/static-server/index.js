/*
 * static server
 */

const path = require('path')
const fs = require('fs')
let getPath = url => path.resolve(process.cwd(), 'public', `.${url}`)
let staticFunc = url => {


  return new Promise((resolve, reject) => {
    let map = {
      '/': '/index.html',
      '/about': '/about.html',
      '/list': '/list.html',
    }
    url = map[url] || url
    let _path = getPath(url)
    let body = fs.readFile(_path, (error, data) => {
      if (error) reject(`NOT FOUND ${error.stack}`)
      resolve(data)
    })
  })
}
module.exports = staticFunc
