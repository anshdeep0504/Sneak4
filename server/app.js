const express = require('express');
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

// Define your routes here
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
