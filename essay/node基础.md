# node基础
- require模块不带后缀node依次查找.js -> .json -> .node后缀 

- require文件夹首先找到node_modules下的同名.js若无则查看package.json下main字段

- `lsof -i :port`  -->list open files 

- cli打开静态服务器`curl -i localhost:port`

- `fs.readFile()`中path参数是相对于`process.cwd()` --> current working directory 为node启动目录

