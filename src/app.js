const express = require ('express');
const helmet = require('helmet');
const cors = require('cors');
require ('dotenv').config();
const router = require ('./routes');
const errorHandler = require('./utils/errorHandler');


//this is our app//

const app = express();

//middlewares//

app.use(express.json());
app.use(helmet({crossOriginResourcePolicy:false}));
app.use(cors());
app.use(router);
app.get("/", (req, res) =>{
return res.send("welcome to node my friend")
});
app.use(errorHandler)
module.exports = app;