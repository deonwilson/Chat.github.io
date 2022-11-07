import Mongoose, { Types } from "mongoose";
import { CHAT_DB_URI } from "../src/const/dataBase";
import { IMessage, SentByEnum } from "../src/interfaces/Message";
import { ChatModel } from "../src/models/Chat";
import { ChatService } from "../src/services/chat.service";
import { MessageService } from "../src/services/message.service";

beforeAll(async () => {
  await Mongoose.connect(CHAT_DB_URI)
});

afterAll(async () => {
  await Mongoose.disconnect()
})

describe('Add message to chat', () => {

  const message: IMessage = {
    text: "hello, how are you?",
    timestamp: 5465656,
    sentBy: SentByEnum.BUSINESS
  }
  const messageError = {

  }
  const idChat = new Mongoose.mongo.ObjectId('6369048c1e05d9857cd67888')
  let chat: any = {
    _id: idChat,
    messages: [],
    totalMessages: 0
  }
  beforeEach(async () => {
    await ChatService.createChat(chat)
  })
  afterEach(async () => {
    await ChatService.deleteChat("6369048c1e05d9857cd67888")
  })

  it('should add a new valid message', async () => {
    // TODO
    const result = await MessageService.addMessageToChat(chat._id, message);
    const messageCreate = result._id ? await MessageService.getMessageId((result._id).toString()) : undefined
    expect(result).not.toBeNull();
    expect(result._id).toBeDefined();
    expect(messageCreate?._id).toBeDefined();
  });

  it('should throw error for an invalid message format', async () => {
    try {
      const result = await MessageService.addMessageToChat(chat._id, messageError);
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
