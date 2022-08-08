const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
const userRoute = require('./routes/UserRoute');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


let corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

app.get('/', function (req, res) {
    res.send('hello');
})

app.use(cors(corsOptions));
app.use('/api/users', userRoute);


const config = require('./DB');

mongoose.connect(config.DB).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
})



