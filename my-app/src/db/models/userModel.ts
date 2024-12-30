import { ObjectId } from "mongodb";
import { database } from "../config";
import { UserTypeNoId } from "@/types";
import { hashPassword } from "@/utils/bcrypt";
import { userSchema } from "../schemas/userSchema";

export class userModel {
  static async getUserById(id: string) {
    const newId = new ObjectId(id);
    const user = await database.collection("Users").findOne(
      { _id: newId },
      {
        projection: { password: 0 },
      }
    );
    return user;
  }

  static async getUserByEmail(email: string) {
    const user = await database.collection("Users").findOne({ email });

    return user;
  }

  static async addUser(userData: UserTypeNoId) {
    userSchema.parse(userData);

    const existingUser = await database
      .collection("Users")
      .findOne({ email: userData.email });

    if (existingUser) {
      return Response.json({
        message: "User already exists",
      });
    }
    const newUser: UserTypeNoId = {
      name: userData.name,
      username: userData.username,
      email: userData.email,
      password: hashPassword(userData.password),
    };

    const user = await database.collection("Users").insertOne(newUser);

    return user;
  }

  static async getUsers() {
    const users = await database.collection("Users").find().toArray();

    return users;
  }
}
