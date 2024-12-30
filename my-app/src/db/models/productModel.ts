import { ObjectId } from "mongodb";
import { database } from "../config";

export class productModel {
  static async getProducts(page: string) {
    const limit = 5;
    const skip = (+page - 1) * limit;
    const products = await database
      .collection("Products")
      .find()
      .skip(skip)
      .limit(limit)
      .toArray();

    return products;
  }

  static async getProductById(id: string) {
    const newId = new ObjectId(id);
    const product = await database
      .collection("Products")
      .findOne({ _id: newId });

    return product;
  }

  static async getProductBySlug(slug: string) {
    const product = await database.collection("Products").findOne({ slug });

    return product;
  }
}
