const router = require('koa-router')()
router.get("/",(ctx,next) =>{
    return new Promise((resolve,reject)=>{
        ctx.body = {
            "data":[
                {
                    "postID" :1,
                    "description" : "Bai post test"
                }
            ]
        }
        resolve()
    })
})
module.exports = router.routes()