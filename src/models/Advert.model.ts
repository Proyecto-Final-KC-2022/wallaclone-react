export type Advert = {
  _id: string;
  name: string;
  image: string;
  description: string;
  forSale: boolean;
  price: number;
  tags: Array<string>;
  creationDate: string;
  ownerId: string;
  preOrdered: boolean;
  sold: boolean;
};
