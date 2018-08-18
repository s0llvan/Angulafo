var models = require('./server/models/');

models.sequelize
.authenticate()
.then(function () {
	console.log('Connection successful');
})
.catch(function(error) {
	console.log("Error creating connection:", error);
});

var bodyParser = require('body-parser');

var app = require('express')(),
users = require('./server/controllers/users');

app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.post('/users', users.create);

app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'), function () {
  console.log("Magic happens on port", app.get('port'));
});