import Router from "koa-router";

const router = new Router();
//Acá van los cuatro endpoints

//GET suma
router.get("suma.nums", "/suma/:num1/:num2", async (ctx) => {
    const num1 = ctx.params.num1;
    const num2 = ctx.params.num2;
    const result = +num1 + +num2;
    ctx.body = {
        result: result.toString(),
        status: "Success"
    }
})

//GET multiplicacion
router.get("multiplicacion.nums", "/multiplicacion/:num1/:num2", async (ctx) => {
    const num1 = ctx.params.num1;
    const num2 = ctx.params.num2;
    const result = +num1 * +num2;
    ctx.body = {
        result: result.toString(),
        status: "Success"
    }
})

//POST resta
router.post("resta.nums", "/resta", async (ctx) => {
    const num1 = ctx.request.body.num1;
    const num2 = ctx.request.body.num2;
    try {
        const result = +num1 - +num2
        ctx.body = {
            result: result.toString(),
            status: "Success"
        }
        ctx.status = 201
    } catch (error) {
        ctx.body = {
            result: error.message,
            status: "Error"
        }
        ctx.status = 500
    }
})

//POST division
router.post("division.nums", "/division", async (ctx) => {
    const num1 = ctx.request.body.num1;
    const num2 = ctx.request.body.num2;
    try {
        if (num2 === "0") {     //Error de división por 0
            ctx.throw(400, "Error: division by 0");
        }
        const result = +num1 / +num2
        ctx.body = {
            result: result.toString(),
            status: "Success"
        }
        ctx.status = 201
    } catch (error) {
        ctx.body = {
            result: error.message,
            status: "Error"
        }
    }
})

export default router;