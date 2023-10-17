const { MongoClient } = require("mongodb");
//everything is updated
//make sure everything is spelled correctlys
const express = require('express');
const app = express();
// Start the Express server
const port = 3000; // Change the port as needed
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Middleware to parse JSON requests
app.use(express.json());

// Your existing Books route
const { Books } = require('./Controllers');
app.get('/', Books);

// Route for adding a book
app.post('/addBook', (req, res) => {
    const newBook = {
        "Title": "HAHAHA",
        "Author": "JKJKJKJ"
    };

    // Generate a unique key for the new book
    const newBookKey = `Book ${Object.keys(books).length + 1}`;

    books[newBookKey] = newBook;

    // Send a success response or updated book list
    res.json(books);
});
app.delete('/deleteBook', (req, res) => {
  const bookToDelete = {
      title: "The City of Bones",
      author: "Cassandra Clare"
  };

  // Find the book based on title and author
  const bookKeyToDelete = Object.keys(books).find(key => {
      const book = books[key];
      return book.Title === bookToDelete.title && book.Author === bookToDelete.author;
  });

  if (bookKeyToDelete) {
      delete books[bookKeyToDelete];
      res.json({ message: 'Book deleted successfully' });
  } else {
      res.status(404).json({ message: 'Book not found' });
  }
});


async function run() {
  // TODO: Replace the placeholder connection string below with your Atlas cluster specifics.
  const uri =
    "mongodb+srv://kyerra:March12001@cluster0.6vwto1x.mongodb.net/";

  const client = new MongoClient(uri);

  try {
    await client.connect();

    const dbName = "Books";
    const collectionName = "Books";

    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    const findAllQuery = {}; // An empty query matches all documents

    const findAllResult = await collection.find(findAllQuery).toArray();

    if (findAllResult.length === 0) {
      console.log("No documents found in the 'Books' collection.\n");
    } else {
      console.log(`Found ${findAllResult.length} documents in the 'Books' collection:\n${JSON.stringify(findAllResult)}\n`);
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
