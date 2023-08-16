import Router from "koa-router"
import operation from "./routes/operations.js"

//Creamos un router
const router = new Router()

router.use(operation.routes())

export default router
