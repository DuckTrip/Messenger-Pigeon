// Using a tutorial to figure out how to connect to mongodb
import { MongoClient } from 'mongodb';

const client = new MongoClient("mongodb+srv://DuckTrip:<db_password>@messengerpigeonchat.cghhloa.mongodb.net/?compressors=zlib");

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}

// Call this only when your application terminates
export async function disconnectFromMongoDB() {
  await client.close();
}
