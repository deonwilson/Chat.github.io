import { check, body, param } from 'express-validator';

import { chatValidateResult } from '../helpers/validate.helper';
import { Request, Response, NextFunction } from '../types/express'

export const chatDto = 
  [ 
    param('chatId')
    .isLength({max:24})
    .isLength({min:24}),

    (req :Request, res : Response, next: NextFunction) => {
      chatValidateResult(req, res, next)
    }
  ]