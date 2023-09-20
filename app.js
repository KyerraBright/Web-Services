const { MongoClient } = require("mongodb");

async function run() {
  // TODO: Replace the placeholder connection string below with your Atlas cluster specifics.
  const uri =
    "mongodb+srv://kyerra:March12001@cluster0.6vwto1x.mongodb.net/";

  const client = new MongoClient(uri);

  try {
    await client.connect();

    const dbName = "Contacts";
    const collectionName = "Contacts";

    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    const findAllQuery = {}; // An empty query matches all documents

    const findAllResult = await collection.find(findAllQuery).toArray();

    if (findAllResult.length === 0) {
      console.log("No documents found in the 'Contacts' collection.\n");
    } else {
      document.write(`Found ${findAllResult.length} documents in the 'Contacts' collection:\n${JSON.stringify(findAllResult)}\n`);
      console.log(`Found ${findAllResult.length} documents in the 'Contacts' collection:\n${JSON.stringify(findAllResult)}\n`);
    }
  } catch (err) {
    console.error(`Something went wrong: ${err}\n`);
  } finally {
    // Close the MongoDB connection when done.
    await client.close();
  }
}

// Call the run function to start the process.
run();
