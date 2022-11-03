import { Request, Response, NextFunction } from '../types/express'
import { ChatService } from '../services/chat.service';

//al final extenderle la interfas req o añadir libreria que me resuelva este tipado
export const chatMiddleware = {
  async existChat(req: Request, res: Response, next: NextFunction) {

    try {
      const chatId = req.query.chatId as string;
      const created = await ChatService.getChat(chatId);
      if (!created) {
        const error = {
          message: "this chat no exist or error in chatMiddleware existChat",
          status: 404
        }
        return res.status(404).json(error)
      }
      return next()
    } catch (error) {
      next(error)
    }
  },

  async existMessageFromChat(req: Request, res: Response, next: NextFunction) {

    try {
      const chatId = req.query.chatId as string;
      const { messageId } = req.params;
      const created = await ChatService.messageFromChat(chatId, messageId);
      if (!created) {
        const error = {
          message: "this message not exist in this chat or error in chatMiddleware existMessageFromChat",
          status: 404
        }
        return res.status(404).json(error)
      }
      return next()
    } catch (error) {
      next(error)
    }
  },
}