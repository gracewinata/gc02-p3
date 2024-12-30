import { ObjectId } from "mongodb";
import { database } from "../config";

export class wishlistModel {
  static async getWishlist(userId: string) {
    const wishlist = await database
      .collection("Wishlist")
      .aggregate([
        {
          $match: {
            userId: new ObjectId(userId),
          },
        },
        {
          $lookup: {
            from: "Products",
            localField: "productId",
            foreignField: "_id",
            as: "Product",
          },
        },
        {
          $unwind: {
            path: "$Product",
            preserveNullAndEmptyArrays: true,
          },
        },
      ])
      .toArray();

    return wishlist;
  }

  static async addWishlist({
    userId,
    productId,
  }: {
    userId: string;
    productId: string;
  }) {
    const newWishlist = {
      userId: new ObjectId(userId),
      productId: new ObjectId(productId),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const wishlist = await database
      .collection("Wishlist")
      .insertOne(newWishlist);

    return wishlist;
  }

  // static async removeWishlist({
  //   userId,
  //   wishlistId,
  // }: {
  //   userId: string;
  //   wishlistId: string;
  // }) {
  //   const newWishlistId = new ObjectId(wishlistId);
  //   const newUserId = new ObjectId(userId);
  //   const filter = {
  //     userId: newUserId,
  //     wishlistId: newWishlistId,
  //   };

  //   const wishlist = await database.collection("Wishlist").findOne(filter);

  //   // const wishlist = await database.collection("Wishlist").deleteOne(filter);

  //   console.log(wishlist, "<<< deleted");

  //   return wishlist;
  // }

  static async removeWishlist({ wishlistId }: { wishlistId: string }) {
    const newId = new ObjectId(wishlistId);

    const wishlist = await database
      .collection("Wishlist")
      .deleteOne({ _id: newId });

    return wishlist;
  }
}
