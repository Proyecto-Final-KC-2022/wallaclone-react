import { Advert } from "./Advert.model";
import { User } from "./User.model";

export type Chat = {
  _id: string;
  advertId: Advert;
  messages: Array<Message>;
  members: Array<User>;
};

export type Message = {
  _id: string;
  content: string;
  sender: string;
  receiver: string;
  creationDate: string;
  read: boolean;
};
