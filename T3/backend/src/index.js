import koa from "koa"
import KoaLogger from "koa-logger"
import { koaBody } from "koa-body"
import router from "./routes.js"
import dotenv from "dotenv"

//Configuramos el puerto con el archivo .env
dotenv.config()
export const port = process.env.PORT

//Creamos instancia de koa
const app = new koa()

app.use(KoaLogger())
app.use(koaBody())

//CORS
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:5173')
    ctx.set('Access-Control-Allow-Methods', 'GET, POST')
    ctx.set('Access-Control-Allow-Headers', 'Content-Type')
    await next()
})

//Router
app.use(router.routes())

//Ruta de prueba
app.use((ctx, next) => {
    ctx.body = 'Hola mundo'
})

//Escuchamos en el puerto 80
app.listen(port, () => {
    console.log('Escuchando en el puerto 80')
})