// Dependencies
const express = require('express');
const app = express();

const path = require('path');

// port the server will be using
const PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let currentReservationData = [
    { name : 'Tinku',
       number : '0123456789' ,
       email : 'tinkubansal21@gmail.com',
       uniqueId : 1234
    }
];

module.exports = currentReservationData;

let waitingReservationData = [
    { name : 'Tinku',
       number : '0123456789' ,
       email : 'tinkubansal21@gmail.com',
       uniqueId : 1234
    }
];

module.exports = waitingReservationData;

let currentReservations = 1;
let waitingList = 1;

app.post('/api/reserve', (req, res) => {
    const customerDataObj = req.body;
        if(currentReservations < 5){
            currentReservationData.push(customerDataObj);
            currentReservations++;
        }
        else{
            waitingReservationData.push(customerDataObj);
            waitingList++;
        }
    
        alert("Yay! You are officially booked!");
  });
  



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//sample text for what the user see's
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/reserve', (res, req) => res.sendFile(path.join(__dirname, 'reserve.html')));


app.get('/api,tables', (res, req) => res.sendFile(path.join(__dirname, 'tables.html')));
// app.get('/api/tables', (req, res) => res.json(currentReservationData));


// showing that the server is running
app.listen(PORT, () => {
    console.log(`listening on: ${PORT}`);
});