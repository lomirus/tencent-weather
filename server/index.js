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
        case "/api/v1/weather/timeline": ctx.body = [{
            time: "15:00",
            weather: "yun",
            temperature: 20
        }, {
            time: "16:00",
            weather: "yun",
            temperature: 20
        }, {
            time: "17:00",
            weather: "yun",
            temperature: 20
        }, {
            time: "18:00",
            weather: "yun",
            temperature: 20
        }, {
            time: "19:00",
            weather: "yun",
            temperature: 20
        }, {
            time: "20:00",
            weather: "yun",
            temperature: 20
        }, {
            time: "21:00",
            weather: "yun",
            temperature: 20
        }, {
            time: "22:00",
            weather: "yun",
            temperature: 20
        }, {
            time: "23:00",
            weather: "yun",
            temperature: 20
        }, {
            time: "24:00",
            weather: "yun",
            temperature: 20
        }, {
            time: "01:00",
            weather: "yun",
            temperature: 20
        }, {
            time: "02:00",
            weather: "yun",
            temperature: 20
        }, {
            time: "03:00",
            weather: "yun",
            temperature: 20
        }, {
            time: "04:00",
            weather: "yun",
            temperature: 20
        }, {
            time: "05:00",
            weather: "yun",
            temperature: 20
        }, {
            time: "06:00",
            weather: "yun",
            temperature: 20
        }, {
            time: "07:00",
            weather: "yun",
            temperature: 20
        }, {
            time: "08:00",
            weather: "yun",
            temperature: 20
        }, {
            time: "09:00",
            weather: "yun",
            temperature: 20
        }, {
            time: "10:00",
            weather: "yun",
            temperature: 20
        }, {
            time: "11:00",
            weather: "yun",
            temperature: 20
        }, {
            time: "12:00",
            weather: "yun",
            temperature: 20
        }, {
            time: "13:00",
            weather: "yun",
            temperature: 20
        }, {
            time: "14:00",
            weather: "yun",
            temperature: 20
        }]; break;
        default: ctx.body = {
            err: "Invalid API Request"
        }
    }

    console.log(ctx.request.url)
});

app.listen(3000);