import { ObjectId } from "mongodb";

export type UserType = {
  _id: ObjectId;
  name: string;
  username: string;
  email: string;
  password: string;
};

export type UserTypeNoId = {
  name: string;
  username: string;
  email: string;
  password: string;
};

export type ProductType = {
  _id: ObjectId;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string;
  createdAt: Date;
  updatedAt: Date;
};

export type ProductTypeNoId = {
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type WishlistType = {
  _id: ObjectId;
  userId: ObjectId;
  productId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
};

export type WishlistTypeNoId = {
  userId: ObjectId;
  productId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
};
