const express = require("express");
const app = express();
const port = 3000;
const contactsRoutes = require("./express"); // Import your routes

app.use(express.json());

app.use("/contacts", contactsRoutes); // Mount your contacts routes at /contacts

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Select the container where you want to display the JSON content
  const jsonContainer = document.getElementById("json-container");

  // Fetch the JSON data from the file
  fetch("contact.json")
      .then((response) => response.json())
      .then((data) => {
          // Convert the JSON data to a string with proper formatting
          const jsonString = JSON.stringify(data, null, 2);

          // Create a <pre> element to preserve formatting
          const preElement = document.createElement("pre");
          preElement.textContent = jsonString;

          // Append the <pre> element to the container
          jsonContainer.appendChild(preElement);
      })
      .catch((error) => {
          console.error("Error loading JSON:", error);
      });
});

