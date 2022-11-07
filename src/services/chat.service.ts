import { IChat } from '../interfaces/Chat';
import { ChatModel } from '../models/Chat';
import { MessageModel } from '../models/Message';

export const ChatService = {
  async createChat(chat: IChat ): Promise<IChat> {
    const newMessage = await MessageModel.insertMany(chat.messages)
    const saveChat:IChat ={
      messages : newMessage,
      totalMessages: chat.totalMessages
    } 
    const data = new ChatModel(saveChat)
    const chatCreateOk = await data.save()
    return chatCreateOk as IChat;
  },

  async getChats(): Promise<IChat[]> { // aclaracion *1
    return await ChatModel.find() as IChat[];
  },

  async getChat(chatId: string): Promise<IChat> {
    return await ChatModel.findById(chatId) as IChat;
  },

  async deleteChat(chatId: string): Promise<IChat> {
    return await ChatModel.findByIdAndDelete(chatId) as IChat;
  },

  async messageFromChat(chatId: string, messageId: string): Promise<IChat> {
    return await ChatModel.findOne({_id: chatId, messages: messageId}) as IChat;
  },
};