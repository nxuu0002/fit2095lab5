let express = require("express");
let bodyparser = require('body-parser');
let app = express()
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('img'));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static('css'));

var db=[];
var filePath=__dirname+"/views/";

app.get('/', function (req, res) {
    let fileName=filePath+"index.html"
    res.sendFile(fileName);
});

app.get("/addtask",function(req,res){
    let fileName=filePath+"addtask.html"
    res.sendFile(fileName);
});

app.get('/listtask', function (req, res) {
    res.render("listtask",{mydata: db});
});

app.post('/addtask', function (req, res) {
    let data=req.body;
    db.push(data);
    res.render("listtask",{mydata: db});
});

app.listen(8080);