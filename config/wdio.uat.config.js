import { config as baseConfig } from "../wdio.conf"

export const config = Object.assign(baseConfig, {
    "environment": "TEST",
    "email": "raja123@mail.com",
    "firstName": "Raja",
    "lastName": "R",
    "baseUrl": "https://staging.webdriveruniversity.com"
})