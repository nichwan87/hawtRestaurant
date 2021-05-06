// Dependencies
const express = require('express');
const app = express();

const path = require('path');

// port the server will be using
const PORT = 8080;






app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//sample text for what the user see's
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/tables', (res, req) => res.sendFile(path.join(__dirname, '')));

app.get('/api,waitList', (res, req) => res.sendFile(path.join(__dirname, '')));



// showing that the server is running
app.listen(PORT, () => {
    console.log(`listening on: ${PORT}`);
});