import {createConnection} from 'typeorm'
import {DATABASE_CONNECTION} from '../constants'

export const databaseProviders = [
    {
        provide: DATABASE_CONNECTION,
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'abc123',
            database: 'fakebrowser_console',
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            synchronize: true,
        }),
    },
]
