import { Request, Response, NextFunction } from '../types/express'
import { ChatService } from '../services/chat.service';
import { CHAT_CONTROLLER } from './const';
import { errorController } from './error';
import { IChat } from '../interfaces/Chat';

//al final extenderle la interfas req o añadir libreria que me resuelva este tipado
export const ChatController = {
  async postChat(req: Request, res: Response, next: NextFunction) {

    try {
      const chat :IChat = req.body;
      chat.totalMessages = chat.messages?.length
      const chatCreate = await ChatService.createChat(chat);
      if(!chatCreate) errorController(CHAT_CONTROLLER, "postChat")
      return res.status(201).json(chatCreate);

    } catch (error) {
      next(error);
    }
  },

  async getChats(_req: Request, res: Response, next: NextFunction) {

    try {
      const chats = await ChatService.getChats();
      if(!chats) errorController(CHAT_CONTROLLER, "getChats")
      return res.status(200).json(chats);

    } catch (error) {
      next(error);
    }
  },

  async getChat(req: Request, res: Response, next: NextFunction) {

    try {
      const chatId = req.params.chatId as string;
      const chat = await ChatService.getChat(chatId);

      if(!chat) errorController(CHAT_CONTROLLER, "getChat")

      return res.status(200).json(chat);

    } catch (error) {
      next(error);
    }
  },

  async deleteChat(req: Request, res: Response, next: NextFunction) {
    const chatId = req.params.chatId as string;

    try {
      const deleted = await ChatService.deleteChat(chatId);

      if(!deleted) errorController(CHAT_CONTROLLER, "deleteChat")

      return res.status(200).json(deleted);

    } catch (error) {
      next(error);
    }
  },
};
