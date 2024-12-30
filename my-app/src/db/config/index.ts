import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://gracewinata:KNvk9ZxdwOLajOQs@cluster0.pgt2n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
export const client = new MongoClient(uri);
export const database = client.db("Galora");
