const connect = require('connect')
const serveStatic = require('serve-static')
const root = `${__dirname}${process.env.NODE_ENV === 'development' ? '' : './../dist'}`
connect().use(serveStatic(root)).listen(process.env.PORT, function () {
  console.log(`Server running on root:${root} port:${process.env.PORT}...`)
})
