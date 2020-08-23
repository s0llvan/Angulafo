var bodyParser = require('body-parser')

var models = require('./server/models/');

models.sequelize
.authenticate()
.then(function () {
	console.log('Connection successful');
})
.catch(function (error) {
	console.log("Error creating connection:", error);
});

var app = require('express')(),
users = require('./server/controllers/users');
auth = require('./server/controllers/auth');
categories = require('./server/controllers/categories');
topics = require('./server/controllers/topics');
posts = require('./server/controllers/posts');

User = require('./server/models/').User;

app.use(bodyParser.json());

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
	
	next();
});

app.post('/login', auth.logIn);

// Categories routes
app.get('/categories', categories.showAll);
app.get('/categories/:id', categories.show);

// Topics routes
app.get('/topics/:id', topics.show);
app.put('/topics', checkUser, topics.edit);
app.post('/topics', checkUser, topics.create);

// Posts routes
app.post('/posts', checkUser, posts.create);

// Users routes
app.get('/users', checkUserAdmin, users.showAll);
app.get('/users/:id', checkUserAdmin, users.show);
app.post('/users', users.create);
app.put('/users', checkUserAdmin, users.update);
app.delete('/users/:id', checkUserAdmin, users.delete);

app.set('port', process.env.PORT || 8002);
app.listen(app.get('port'), function () {
	console.log("Magic happens on port", app.get('port'));
});

function checkUser(req, res, next) {
	
	var token = req.get('Authorization');
	if ((token = req.get('Authorization')) == undefined) {
		res.status(401);
	} else {
		User.find({
			where: {
				'session': token
			}
		}).then(user => {
			if (user) {
				next();
			} else {
				res.status(401);
			}
		}).catch((err) => {
			res.status(400).json(err.errors);
		});
	}
};


function checkUserAdmin(req, res, next) {
	
	var token = req.get('Authorization');
	if ((token = req.get('Authorization')) == undefined) {
		res.status(401);
	} else {
		User.find({
			where: {
				'session': token
			}
		}).then(user => {
			if (user) {
				roles = JSON.parse(user.roles);
				if (roles.indexOf('ADMIN') >= 0) {
					next();
				} else {
					res.status(401);
				}
			} else {
				res.status(401);
			}
		}).catch((err) => {
			res.status(400).json(err.errors);
		});
	}
};
