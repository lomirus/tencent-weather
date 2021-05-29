const Koa = require('koa');

const { now ,timeline, trend } = require('./mock.js');

const app = new Koa();

app.use(async ctx => {
    switch (ctx.request.url) {
        case "/api/v1/weather/now": ctx.body = now; break;
        case "/api/v1/weather/timeline": ctx.body = timeline; break;
        case "/api/v1/weather/trend": ctx.body = trend; break;
        default: ctx.body = {
            err: "Invalid API Request"
        }
    }

    console.log(ctx.request.url)
});

app.listen(3000);