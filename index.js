const   express     = require('express'),
        mongoose    = require('mongoose'),
        app         = express(),
        todoRoutes  = require('./routes/todos'),
        bodyParser  = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/todos', todoRoutes);


app.get('/', function(req, res){
    res.send("Root Route");
})

app.listen(process.env.PORT || 3000, function(){
    console.log ("App running on PORT " + process.env.PORT);

})