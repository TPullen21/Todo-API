var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
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
}];

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

app.listen(PORT, function() {
	console.log('Express listening on port ' + PORT + '!');
});