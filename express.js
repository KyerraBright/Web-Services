console.log("express.js");
const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const router = express.Router();

// MongoDB connection string
const uri = "mongodb+srv://kyerra:March12001@cluster0.6vwto1x.mongodb.net/";
const client = new MongoClient(uri);

// Create a POST route for creating new contacts
router.post("/", async (req, res) => {
  try {
    await client.connect();
    const database = client.db();
    const collection = database.collection("Contacts");

    // Insert the new contact document
    const result = await collection.insertOne(req.body);

    // Respond with the ID of the newly created contact and a 201 status code
    res.status(201).json({ id: result.insertedId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await client.close();
  }
});

module.exports = router;
