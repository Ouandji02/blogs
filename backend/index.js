const app = require('./app')
const http = require('http')

const port = 5000
app.set('post',3000)
const server = http.createServer(app)
server.listen(port,()=> console.log(` Ecoute au port ${port}`))
