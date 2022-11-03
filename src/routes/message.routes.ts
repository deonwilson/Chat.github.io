import { Router } from 'express';

import { MessageController } from '../controllers/message.controller';
import { chatDto } from '../dto/chatDto';
import { messageDeleteDto, messageDto } from '../dto/messajeDto';
import { chatMiddleware } from '../middleware/chat.middleware ';

const router = Router();

/*
    MESSAGE ROUTES
*/
// POST /messages?chat={chatId}
router.post('/messages', messageDto, chatMiddleware.existChat, MessageController.postMessage);

// GET /messages?chat={chatId}
router.get('/messages', chatDto, chatMiddleware.existChat, MessageController.getMessages);

// DELETE /messages/{messageId}?chat={chatId}
router.delete('/messages/:messageId', messageDeleteDto, chatMiddleware.existMessageFromChat, MessageController.deleteMessage);

export default router;
