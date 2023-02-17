//1. import your dependencies
const express = require('express');
const cors = require('cors');
const app = express();

//1.5 configure your mongoose
require('./server/configs/mongoose.config');

//2. configure your express
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//3. attach routes to your express server
require('./server/routes/pirate.routes')(app); 

//4. run your express server
const port = 8000;
app.listen(port, () => console.log(`Listening on port: ${port}`) );