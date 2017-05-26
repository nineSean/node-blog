// var another = require('./test')


// // let test = require('lodash')

// console.log(another)


const http = require('http')
const PORT = 7000
http.createServer(function(req, res) {
  res.end('hello world!')

}).listen(PORT, function() {
  console.log(`server listening on post: ${PORT}`)
})
