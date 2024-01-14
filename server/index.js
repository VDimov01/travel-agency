const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const routes = require('./routes.js');
const { initDatabase } = require('./initDB');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(routes);

const port = 8080;

initDatabase()
    .then(() => {
        app.listen(port, () => console.log('Server running on port 8080...'));
        console.log('Database connected');
    })
    .catch(err => {
        console.log('Database connection failed: ', err);
    });
