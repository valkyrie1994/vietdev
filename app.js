const Koa = require('Koa');
const bodyParser = require('koa-bodyparser')
const userRouter = require('./routes/index')
const app = new Koa()
app.use(bodyParser())
app.use(userRouter.routes()).use(userRouter.allowedMethods());

app.listen(3000);