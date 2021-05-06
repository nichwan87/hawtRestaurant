// Dependencies
const express = require('express');
const app = express();

// port the server will be using
const PORT = 8080;

//sample text for what the user see's
app.get('/', (req, res) => {
    res.send('Hello World!')
});

// showing that the server is running
app.listen(PORT, () => {
    console.log(`listening on: ${PORT}`)
});