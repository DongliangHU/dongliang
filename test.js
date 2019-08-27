let express = require('express');
let bodyParser = require('body-parser');
let app = express();
// parse application/x-www-form-urlencoded
let db = [];
app.use(express.static("public"));
app.use(express.static('css'));
app.use(bodyParser.urlencoded({
    extended: false
}))
app.engine("html",require('ejs').renderFile);
app.set("view.engine","html");
//app.use(bodyParser.json())
app.get('/', function (req, res) {
    res.render('index.html');
});

app.get('/newtask',function(req,res){
    res.render('newtask.html');
})

app.get('/listtasks',function(req,res){
    res.render('listtasks.html',{TaskDb:db});
});
app.post('/data', function (req, res) {
    console.log(req.body);
    //res.send('task have been record.')
    db.push(req.body);
    res.redirect('/');
})
app.listen(8080);