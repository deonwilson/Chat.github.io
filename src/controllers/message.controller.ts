import { MessageService } from '../services/message.service';
import { Request, Response, NextFunction } from '../types/express'
import { MESSAGE_CONTROLLER } from './const';
import { errorController } from './error';



export const MessageController = {
  async postMessage(req: Request, res: Response, next: NextFunction) {
    try {
      const chatId = req.query.chatId as string;
      const message = req.body;
      message.timestamp = Date.now()

      const created = await MessageService.addMessageToChat(chatId, message);
      if (!created) errorController(MESSAGE_CONTROLLER, "postMessage")

      return res.status(201).json(created);
    } catch (error) {
      next(error);
    }
  },

  async getMessages(req: Request, res: Response, next: NextFunction) {
    const chatId = req.query.chatId as string;

    try {
      const messages = await MessageService.getMessagesFromChat(chatId);
      if (!messages) errorController(MESSAGE_CONTROLLER, "getMessages")

      const response = {
        messages: messages,
        count: messages.length
      }
      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  },

  async deleteMessage(req: Request, res: Response, next: NextFunction) {
    const chatId = req.query.chatId as string;
    const { messageId } = req.params;

    try {
      const deleted = await MessageService.deleteMessageFromChat(
        chatId,
        messageId
      );
      if (!deleted) errorController(MESSAGE_CONTROLLER, "deleteMessage")

      return res.status(200).json(deleted);
    } catch (error) {
      next(error);
    }
  },
};
