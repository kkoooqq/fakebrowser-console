import {Injectable} from '@nestjs/common'
import {Request, Response} from 'express'
import * as multer from 'multer'
import * as rimraf from 'rimraf'
import * as cors from 'cors'
import * as bodyParser from 'body-parser'
import * as path from 'path'
import {mkdirSync, existsSync} from 'fs-extra'

const uploadsDir = path.resolve(__dirname, '../uploads')

if (!existsSync(uploadsDir)) {
    mkdirSync(uploadsDir)
}

const storage: multer.StorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir)
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        cb(null, `${Math.random().toString(36).substring(7)}${ext}`)
    },
})

const upload = multer({storage: storage})

@Injectable()
export class AppUploadService {
    upload(req: Request, res: Response) {
        rimraf.sync(`${uploadsDir}/**/*`)
        res.status(200).json(req['files'])
    }
}
