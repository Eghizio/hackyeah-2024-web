export type Theme = "light" | "dark" | "contrast";
export type FontSize = "normal" | "big" | "large";

export type Order = "ascending" | "descending";

export type StyleVariant = "primary" | "secondary";

export type Project = {
  _id: string;
  ID: number;
  title: string;
  photo: string;
  category: string;

  user_id: string;
  user_name: string;

  abstract: string;
  detailed_desc: string;

  location: string;
  coordinates: string;

  is_verified: boolean;
  status_of_project: string;

  date_added: string;
  date_ended: string;

  cost: number;
  gathered_money: number;
  funded_money: number;
};

export type Benefit = {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  expirationDate: string;
  inStock: number;
  price: number;
};
