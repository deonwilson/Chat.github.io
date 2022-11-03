import { Schema, model, Types } from 'mongoose';

import { IChat } from '../interfaces/Chat';

export const ChatSchema = new Schema<IChat>(
	{
		messages: {
			type: [{ type: Types.ObjectId, ref: 'Message' }],
		},
		/* totalMessages: { lo comente por 2 motivos, 
							1-motivo: es calculable este valor
							2-Cuando agrego o elimino un mensaje, tendria
							 que hacer esa logica extra para sumar 1 o restarle 1 a esta propiedad,
							//Aclaracion:
							Si en el pr me aclaran que no es asi, 
							implemento su criterio, solamente esto lo hice por simple criterio mio
			type: Number,
		}, */
	},
	{ versionKey: false }
);

export const ChatModel = model<IChat>('Chat', ChatSchema);
