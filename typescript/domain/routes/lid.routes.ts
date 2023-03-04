import * as express from 'express'
import { Request, Response } from 'express'
import lidService from '../service/lid.service'

const lidRouter = express.Router()
lidRouter.get('/', (req: Request, res:Response) => {
    try{
        const lids = lidService.getAllLids()
        res.status(200).json(lids)
    }catch(error){
        res.status(500).json({ status: 'error'})
    }
})

export default lidRouter
