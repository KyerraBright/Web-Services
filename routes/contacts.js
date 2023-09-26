const fetch = require("node-fetch");

const apiUrl = "http://localhost:3000/contacts"; // Replace with the appropriate URL
console.log('contacts.js');
// Create a new contact
fetch(apiUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "John Doe", email: "john@example.com" }),
})
  .then((response) => response.json())
  .then((data) => console.log("Created contact:", data))
  .catch((error) => console.error("Error:", error));

// Update a contact
const contactIdToUpdate = "6509cea7a568479d1a625ff0"; // Replace with the actual contact ID
fetch(`${apiUrl}/${contactIdToUpdate}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ email: "newemail@example.com" }),
})
  .then((response) => {
    if (response.status === 204) {
      console.log("Contact updated successfully.");
    } else {
      console.error("Error updating contact.");
    }
  })
  .catch((error) => console.error("Error:", error));

// Delete a contact
const contactIdToDelete = "6509cea7a568479d1a625ff0"; // Replace with the actual contact ID
fetch(`${apiUrl}/${contactIdToDelete}`, {
  method: "DELETE",
})
  .then((response) => {
    if (response.status === 200) {
      console.log("Contact deleted successfully.");
    } else {
      console.error("Error deleting contact.");
    }
  })
  .catch((error) => console.error("Error:", error));
