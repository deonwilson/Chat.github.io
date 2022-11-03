import { ObjectId } from 'mongoose';

export enum SentByEnum {
  BUSINESS = 'BUSINESS',
  CUSTOMER = 'CUSTOMER',
}

export interface IMessage {
  _id?: ObjectId;

  text: string;

  timestamp: number;

  sentBy: SentByEnum;
}
