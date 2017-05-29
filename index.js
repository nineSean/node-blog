/**
 * @author nineSean
 * @email ninesean1989@gmail.com
 * @create date 2017-05-29 03:43:28
 * @modify date 2017-05-29 03:43:28
 * @desc [description]
*/
const http = require('http')
const PORT = 7000
const App = require('./app')
const server = new App()
http.createServer(server.initServer()).listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`)
})
