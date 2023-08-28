const express = require('express');  
const morgan = require('morgan');    
const handlebars = require('express-handlebars'); 
const path = require('path');
// const newController = require('New')

const route = require('./routes');
const db = require('./config/db');

db.connect(); // connect to db

const app = express();  
const port = 3000;

app.use(express.static(path.join(__dirname,'public')));  

const viewsPath = path.join(__dirname, 'resources','views'); 

app.engine('hbs',  handlebars.engine({extname: ".hbs"}));  
app.set('view engine','hbs');  
app.set('views', viewsPath);  

route(app);


// để chương trình chờ và in ra dòng Example app listening on port
app.listen(port, () => {
  console.log(`Example app listening on https://localhost:${port}`);
})