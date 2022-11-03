import { IChat } from '../interfaces/Chat';
import { ChatModel } from '../models/Chat';

export const ChatService = {
  async createChat(chat: IChat): Promise<IChat> {
    const data = new ChatModel(chat)
    await data.save()
    return data as IChat;
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
//aclarion*1 : optomizo la memoria, parece absurdo por que claro, cuando compila simplifica el codigo,
// ejemplo, de tener una constante declarada asi const chat = {etc}, pasa por un proceso, para que esa variable ocupe menos espacio
// en memoria, de la variable chat lo pasa capaz a x o y anda saber para que ocupe menos,
// aun se puede mejorar no declarando nada y retornando directo la consulta y optimizaria aun mas.
/* 
async getChats(): Promise<IChat[]> {
    const chat = await ChatModel.find() 
    return chat as IChat[];
  },

*/