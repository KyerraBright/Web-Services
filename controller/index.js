const PersonOne = (req, res, next) => {
    const contacts = {
      Contact: {
        firstName: "Kristopher",
        lastName: "Bright",
        email: "Kristopher@comcast.net",
        favoriteColor: "Yellow",
        birthday: "02/08/99"
      },
      Contact2: {
        firstName: "Kayden",
        lastName: "Bright",
        email: "Kayden@comcast.net",
        favoriteColor: "Blue",
        birthday: "07/22/03"
      },
      Contact3: {
        firstName: "Christine",
        lastName: "Bright",
        email: "Christine@comcast.net",
        favoriteColor: "Any",
        birthday: "06/25/75"
      }
    };
  
    // Send the JSON response
    res.json(contacts);
  };
  
  module.exports = { PersonOne };
  