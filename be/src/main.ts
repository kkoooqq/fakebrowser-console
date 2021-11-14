import {NestFactory} from '@nestjs/core'
import {AppModule} from './app.module'
import {NestExpressApplication} from '@nestjs/platform-express'
import * as path from 'path'

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule)
    // app.setBaseViewsDir(path.resolve(__dirname, '../../fe/dist/fakebrowser-console'))
    // app.enableCors({
    //     origin: true,
    //     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    //     allowedHeaders: 'X-Requested-With,content-type',
    //     credentials: true,
    // })

    app.useStaticAssets(path.resolve(__dirname, '../../fe/dist/fakebrowser-console'), {
        prefix: '/',
    })

    await app.listen(4201)
}

bootstrap().catch(e => {
    console.warn(e)
})
