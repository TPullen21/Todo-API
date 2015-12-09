var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;
/*var todos = [{
	id: 1,
	description: 'Meet mum for lunch',
	completed: false
}, {
	id: 2,
	description: 'Got to shops',
	completed: false
}, {
	id: 3,
	description: 'Post a letter',
	completed: true
}];*/
var todos = [];
var nextTodoId = 1;

app.use(bodyParser.json());

app.get('/', function (req, res) {
	res.send('Todo API Root');
});

app.get('/todos', function (req, res) {
	res.json(todos);
});

app.get('/todos/:id', function (req, res) {
	var todoItem = todos[req.params.id - 1];

	if (todoItem) {
		res.json(todoItem);
	}
	else {
		res.status(404).send();
	}

});

app.post('/todos', function (req, res) {
	var body = req.body;

	body.id = nextTodoId++;
	todos.push(body);

	console.log('Description: ' + body.description);

	res.json(body);
});

app.listen(PORT, function() {
	console.log('Express listening on port ' + PORT + '!');
});