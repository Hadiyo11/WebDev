import app from "./server";
import mongodb from "mongodb";
import dotenv from "dotenv";

async function main() {
  dotenv.config();

  const client = new mongodb.MongoClient(process.env.LISTINGSREVIEWS_DB_URI);
  const port = process.env.PORT || 8000;
  try {
    //connect to the mongodb cluster
    await client.connect();

    app.listen(port, () => {
      console.log("server is listening on port:" + port);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}
main().catch(console.error);
