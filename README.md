## Features


### Client End

- `Webpack`
	- Code Split
- `React`
	- Functionnal Components, Hooks, React 17 JSX Tranform
	- CSS in JS
	- Flux (Hooks)
- `Typescript`
- `Babel`
- `ECharts`
- Progressive Web Application

### Server End

- `Koa 2`

## API

### `/api/v1/weather`

APIs in this path will return the requested weather infomation, judging the location by user's IP.

#### `/api/v1/weather/now`

Returns the real-time weather infomation.

Reponse Example:
```js
{
    city: string, // "重庆市 南岸区"
    temperature: number, // 20
    weather: string, // "晴"
    tip: string, // "光芒透过云缝，洒向大地~"
    details: Array<Array<string>(2)>
    /*[
        ["东北风", "1级"],
        ["湿度", "50%"]
    ]*/
}
```

#### `/api/v1/weather/timeline`

Returns the weather infomation of recent 24 hours.

Reponse Example:
```js
Array<{
    time: string, // "15:00",
    weather: string, // "yun",
    temperature: number, // 20
}>(3)
```

#### `/api/v1/weather/trend`

Returns the weather infomation of recent days, from yesterday, a week in total.

Reponse Example:
```js
Array<{
    day: string, // "昨天", "今天", "周二"
    date: string, // "05/28"
    daytime_weather: string, // "阴"
    daytime_icon: string, // "yin"
    night_weather: string, // "阴"
    night_icon: string, // "yin"
    max_t: number, // 28
    min_t: number, // 20
    wind: string, // "东南风"
    wind_speed: number, // 4
}>(24)
```

#### `/api/v1/weather/suggestions`

Returns the suggestions.

Reponse Example:
```js
Array<{
    icon: string, // "t_shirt"
    state: string, // "热"
    for: string, // "穿衣"
}>(8)
```

#### `/api/v1/weather/recent`

Returns the weather infomation of recent two days (today and tomorrow).

Reponse Example:
```js
Array<{
    weather: string, // "晴", "晴转阴"
    icon: string, // "qing",
    max_t: number, // 29,
    min_t: number, // 21,
}>(2)
```

