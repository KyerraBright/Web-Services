const Books = (req, res, next) => {
    const books = {
        "Book 1": {
            "Title": "The City of Bones",
            "Author": "Cassandra Clare"
        },
        "Book 2": {
            "Title": "The City of Ashes",
            "Author": "Cassandra Clare"
        },
        "Book 3": {
            "Title": "The City of Glass",
            "Author": "Cassandra Clare"
        },
        "Book 4": {
            "Title": "The City of Fallen Angels",
            "Author": "Cassandra Clare"
        },
        "Book 5": {
            "Title": "The City of Lost Souls",
            "Author": "Cassandra Clare"
        },
        "Book 6": {
            "Title": "The City of Heavenly Fire",
            "Author": "Cassandra Clare"
        },
        "Book 7": {
            "Title": "The Shadowhunter's Codex",
            "Author": "Cassandra Clare"
        },
        "Cassandra Clare":{
            "New York Times": "Yes",
            "Most Popular Series": "The Mortal Instruments"
        }
    };

    // Send the JSON response
    res.json(books);
};

module.exports = { Books };
