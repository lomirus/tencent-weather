const Koa = require('koa');

const app = new Koa();

app.use(async ctx => {
    switch (ctx.request.url) {
        case "/api/v1/weather/now": ctx.body = {
                city: "重庆市 南岸区",
                temperature: 20,
                weather: "晴",
                tip: "光芒透过云缝，洒向大地~",
                details: [
                    ["东北风", "1级"],
                    ["湿度", "50%"]
                ]
        }; break;
        default: ctx.body = {
            err: "Invalid API Request"
        }
    }
  
  console.log(ctx.request.url)
});

app.listen(3000);