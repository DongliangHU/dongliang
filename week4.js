let express = require('express');
let app = express();
let morgan = require('morgan');
let ejs = require('ejs');
let bodyParser = require('body-parser');
let date = new Date();
app.use(express.static('img'));
app.use(morgan('common'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views','public');

app.use(bodyParser.urlencoded({
    extended:false
}));
let ar = [{name:'Tim',age:23},{name:'Gui',age:24}];
app.get('/',function(req,res){
    console.log('Hello from app.get');
    res.sendFile('index.html');
    res.render('index.html',{username:'Tim',data:ar});

});

app.post('/data',function(req,res){
    console.log('I got a post request');
    console.log(req.body.carName);

});
app.listen(8080);