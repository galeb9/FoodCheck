const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());

const list = require('./routes/api/list');
app.use('/api/list/', list)


// connect to mongoose
const port = process.env.port || 5000;
const dbURI = "mongodb+srv://galeb9:ZnanjeJeMoc6@foodcheck.zbjtfcd.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        app.listen(port, () => console.log(`It is alive on the river banks of Rohan: http://localhost:${port}`))
        console.log("connected to db")
    } )
    .catch(err => console.log(err))



