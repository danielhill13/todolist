const   express     = require('express'),
        mongoose    = require('mongoose'),
        app         = express(),
        todoRoutes  = require('./routes/todos'),
        bodyParser  = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/todos', todoRoutes);

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));



app.get('/', function(req, res){
    res.sendFile("index.html");
})


app.listen(process.env.PORT || 3000, function(){
    console.log ("App running on PORT " + process.env.PORT);

})