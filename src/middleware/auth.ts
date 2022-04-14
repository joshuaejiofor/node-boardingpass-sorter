import jwt from 'jsonwebtoken'
import { config } from '../../tests/testData'

const auth = (req: any, res: any, next: any) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, config.JWT_SECRET || '')

        if(decoded !== config.JWT_STATIC_VALUE){
            throw new Error()
        }

        req.token = token
        next()
    } catch (e) {
        res.status(401).send({ 
            error: 'Please authenticate.',  
            "Bearer token (Set authorization)": jwt.sign(config.JWT_STATIC_VALUE || '', config.JWT_SECRET || '')
        })
    }
}

export default auth