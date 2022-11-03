import { validationResult } from 'express-validator';

import { Request, Response, NextFunction } from '../types/express'

export const chatValidateResult = (req: Request, res: Response, next: NextFunction) => {
  try {
    validationResult(req).throw()
    return next()
  } catch (err) {
    res.status(403)
    res.send({ error: err })
  }

}


export const messageValidateResult = (req: Request, res: Response, next: NextFunction) => {
  try {
    validationResult(req).throw()
    return next()
  } catch (err) {
    res.status(403)
    res.send({ error: err })
  }

}
