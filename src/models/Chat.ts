import { Schema, model, Types } from 'mongoose';

import { IChat } from '../interfaces/Chat';

export const ChatSchema = new Schema<IChat>(
	{
		messages: {
			type: [{ type: Types.ObjectId, ref: 'Message' }],
		},
		totalMessages: {
			type: Number,
		},
	},
	{ versionKey: false }
);

export const ChatModel = model<IChat>('Chat', ChatSchema);
