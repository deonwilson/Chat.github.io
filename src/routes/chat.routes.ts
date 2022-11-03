import { Router } from 'express';

import { ChatController } from '../controllers/chat.controller';
import { chatDto } from '../dto/chatDto';
import { chatMiddleware } from '../middleware/chat.middleware ';

const router = Router();

/*
    CHAT ROUTES
*/

router.post('/chats', ChatController.postChat);

router.get('/chats', ChatController.getChats);

router.get('/chats/:chatId', chatDto, chatMiddleware.existChat, ChatController.getChat);

router.delete('/chats/:chatId', chatDto, chatMiddleware.existChat, ChatController.deleteChat);

export default router;
