import { User } from "./User.model";

export type Advert = {
  _id: string;
  name?: string;
  image?: string;
  description?: string;
  forSale?: boolean;
  price?: number;
  tags?: Array<string>;
  creationDate?: string;
  owner?: User;
  preOrdered?: boolean;
  sold?: boolean;
};
