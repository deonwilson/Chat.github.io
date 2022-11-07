import Mongoose from 'mongoose'
import { CHAT_DB_URI } from '../src/const/dataBase';
import { IChat } from '../src/interfaces/Chat';
import { SentByEnum } from '../src/interfaces/Message';
import { ChatService } from '../src/services/chat.service';


beforeAll(async () => {
  await Mongoose.connect(CHAT_DB_URI)
});

afterAll(async () => {
  await Mongoose.disconnect()
})

describe('Create chat', () => {
  const newChatNotMessage: IChat = {
    messages: [],
    totalMessages: 0
  }
  const message = {
    text: "Se debe generar chat cuando el primero que comenta en ese chat, por que deberia crear chat con menssages vacios?",
    timestamp: 121213232,
    sentBy: SentByEnum.CUSTOMER
  }
  const newChatWithMessage: IChat = {
    messages: [message],
    totalMessages: 1
  }
  const chatError = {
    totalMessages: 0
  }

  it('should create a new chat with 0 messages', async () => {
    const chatNotMessage = await ChatService.createChat(newChatNotMessage)
    expect(chatNotMessage._id).toBeDefined()
    expect(chatNotMessage.totalMessages).toBe(0);
  });

  it('should create a new chat with 1 messages', async () => {
    const chatWithMessage = await ChatService.createChat(newChatWithMessage)
    expect(chatWithMessage._id).toBeDefined()
    expect(chatWithMessage.totalMessages).toBe(1);
  });

  it('should throw error for an invalid chat format', async () => {
    try {
      const chatResp = await ChatService.createChat(chatError) 
    } catch (error) {
      expect(error).toBeDefined()
    }

  });
});
