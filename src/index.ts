import express from 'express';
import bodyParser from 'body-parser';
import { connect } from 'mongoose';

import { StatusError } from './errors/StatusError';

import chatRoutes from './routes/chat.routes';
import messageRoutes from './routes/message.routes';

import { CHAT_DB_URI, PORT } from './const/dataBase';

const app = express().use(bodyParser.json());

/*
    ERROR HANDLER
*/
app.use(chatRoutes);
app.use(messageRoutes);

/*
    ERROR HANDLER
*/
app.use((error: StatusError, req: any, res: any, next: any): void => {
	const status = error.status ?? 500;
	const message = error.message ?? 'Internal server error';
	return res.status(status).json({ message });
});

connect(CHAT_DB_URI)
	.then(() => {
		app.listen(PORT);
		console.log(`Listening on port ${PORT}`);
	})
	.catch((err: any) => {
		console.log('An error has ocurred while connecting to database:', err);
	});
