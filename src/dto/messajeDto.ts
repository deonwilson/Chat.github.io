import { param, body, query } from "express-validator";

import { messageValidateResult } from "../helpers/validate.helper";
import { SentByEnum } from "../interfaces/Message";
import { Request, Response, NextFunction } from "../types/express";

export const messageDto = [
  query("chatId").isLength({ max: 24 }).isLength({ min: 24 }),

  body("text")
    .isString()
    .custom((value, { req }) => {
      if (value.length < 1) {
        throw new Error("This comment is vacio");
      }
      return true;
    }),

  body("sentBy")
    .isString()
    .custom((value, { req }) => {
      if (value !== SentByEnum.BUSINESS && value !== SentByEnum.CUSTOMER) {
        throw new Error("Invalid data, it is BUSINESS or CUSTOMER ");
      }
      return true;
    }),

  (req: Request, res: Response, next: NextFunction) => {
    messageValidateResult(req, res, next);
  },
];

export const messageDeleteDto = [
  query("chatId").custom((value, { req }) => {
    if (value.length < 24 || value.length > 24) {
      throw new Error("length chatId is not 24 ");
    }
    return true;
  }),

  param("messageId").custom((value, { req }) => {
    if (value.length < 24 || value.length > 24) {
      throw new Error("length messageId is not 24 ");
    }
    return true;
  }),

  (req: Request, res: Response, next: NextFunction) => {
    messageValidateResult(req, res, next);
  },
];
