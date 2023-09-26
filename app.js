const express = require("express");
const app = express();
const port = 3000;
const contactsRoutes = require("./express"); // Import your routes

app.use(express.json());

app.use("/contacts", contactsRoutes); // Mount your contacts routes at /contacts

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
