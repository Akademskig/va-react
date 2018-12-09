const serve = require('koa-static-server')
const Koa = require('koa')

const PORT = 3000
const app = new Koa()
app.use(
    serve({
        rootDir: './public',
    })
)

app.listen(3000, () => console.log("Listening at", PORT))
