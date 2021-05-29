const Koa = require('koa');

const { now, hours, days, suggestions } = require('./mock.js');

const app = new Koa();

app.use(async ctx => {
    switch (ctx.request.url) {
        case "/api/v1/weather/now": ctx.body = now; break;
        case "/api/v1/weather/hours": ctx.body = hours; break;
        case "/api/v1/weather/days": ctx.body = days; break;
        case "/api/v1/weather/suggestions": ctx.body = suggestions; break;
        default: ctx.body = {
            err: "Invalid API Request"
        }
    }

    console.log(ctx.request.url)
});

app.listen(3000);