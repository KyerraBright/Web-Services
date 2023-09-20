const { MongoClient } = require("mongodb");

async function run() {
  // TODO:
  // Replace the placeholder connection string below with your
  // Altas cluster specifics. Be sure it includes
  // a valid username and password! Note that in a production environment,
  // you do not want to store your password in plain-text here.
  const uri =
    "mongodb+srv://kyerra:March12001@cluster0.6vwto1x.mongodb.net/";

  // The MongoClient is the object that references the connection to our
  // datastore (Atlas, for example)
  const client = new MongoClient(uri);

  // The connect() method does not attempt a connection; instead it instructs
  // the driver to connect using the settings provided when a connection
  // is required.
  await client.connect();

  // Provide the name of the database and collection you want to use.
  // If the database and/or collection do not exist, the driver and Atlas
  // will create them automatically when you first write data.
  const dbName = "Contacts";
  const collectionName = "Contacts";

  // Create references to the database and collection in order to run
  // operations on them.
  const database = client.db(dbName);
  const collection = database.collection(collectionName);


  
  // We can also find a single document. Let's find the first document
  // that has the string "potato" in the ingredients list.
  const findOneQuery = { Contact: "Contact" };

  try {
    const findOneResult = await collection.findOne(findOneQuery);
    if (findOneResult === null) {
      console.log("Couldn't find any recipes that contain 'potato' as an ingredient.\n");
    } else {
      console.log(`Found a recipe with 'potato' as an ingredient:\n${JSON.stringify(findOneResult)}\n`);
    }
  } catch (err) {
    console.error(`Something went wrong trying to find one document: ${err}\n`);
  }}
