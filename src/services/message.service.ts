import { IMessage } from '../interfaces/Message';
import { ChatModel } from '../models/Chat';
import { MessageModel } from '../models/Message';

export const MessageService = {
  async addMessageToChat(chatId: string, message: IMessage): Promise<IMessage> {
    const messageReq = new MessageModel({ sentBy: message.sentBy, text: message.text, timestamp: message.timestamp })
    await ChatModel.findOneAndUpdate(
      { _id: chatId },
      { $push: { messages: messageReq } }, { new: true })
    await messageReq.save()

    return messageReq as IMessage;
  },

  async getMessagesFromChat(chatId: string): Promise<IMessage[]> {
    const chat = await ChatModel.findById({ _id: chatId }).populate("messages", { sentBy: 1, text: 1 })
    return chat?.messages as IMessage[];
  },

  async deleteMessageFromChat(chatId: string, messageId: string): Promise<IMessage> {

    await ChatModel.findOneAndUpdate({ _id: chatId }, { $pull: { messages: messageId } }, { new: true })

    return await MessageModel.findById(messageId) as IMessage;
  },

  async getMessageId(messageId: string): Promise<IMessage> {

    const message =  await MessageModel.findById(messageId)

    return message as IMessage;
  },
};
