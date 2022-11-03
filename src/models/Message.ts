import { Schema, model } from 'mongoose';

import { IMessage } from '../interfaces/Message';

export const MessageSchema = new Schema<IMessage>(
	{
		text: {
			type: String,
			required: [true, 'Must provide a message text'],
		},
		timestamp: {
			type: Number,
			required: [true, 'Must provide a message timestamp'],
		},
		sentBy: {
			type: String,
			required: [true, 'Must specify a message sender'],
			enum: ['BUSINESS', 'CUSTOMER'],
		},
	},
	{ versionKey: false }
);

export const MessageModel = model<IMessage>('Message', MessageSchema);
