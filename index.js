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
//中间件
const staticServer = require('./app/static-server')
const apiServer = require('./app/api-server')
const urlParser = require('./app/url-parser')
server.use(urlParser)
server.use(apiServer)
server.use(staticServer)

//启动app
http.createServer(server.initServer()).listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`)
})
