// require express and other modules
var express = require('express'),
  app = express(),
  bodyParser = require('body-parser')

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }))

// serve static files from public folder
app.use(express.static(__dirname + '/public'))

/************
 * DATABASE *
 ************/

// our database is an array for now with some hardcoded values
var todos = [
  { _id: 7, task: 'Laundry', description: 'Wash clothes'},
  { _id: 27, task: 'Grocery Shopping', description: 'Buy dinner for this week'},
  { _id: 44, task: 'Homework', description: 'Make this app super awesome!'}
]

/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html')
})

/*
 * JSON API Endpoints
 *
 * The comments below give you an idea of the expected functionality
 * that you need to build. These are basic descriptions, for more
 * specifications, see the todosTest.js file and the outputs of running
 * the tests to see the exact details. BUILD THE FUNCTIONALITY IN THE
 * ORDER THAT THE TESTS DICTATE.
 */

app.get('/api/todos/search', function search (req, res) {
  /* This endpoint responds with the search results from the
   * query in the request. COMPLETE THIS ENDPOINT LAST.
   */
})

app.get('/api/todos', function index (req, res) {
  res.json({data: todos})
})

app.post('/api/todos', function create (req, res) {
  var newTask = req.body
  if (todos.length > 0) {
    newTask._id = todos[todos.length - 1]._id + 1;
  } else {
    newTask._id = 1;
  }
  todos.push(newTask)
})

app.get('/api/todos/:id', function show (req, res) {
  let idSelectedTask = parseInt(req.params.id) // parse 0 string into variable
  let matchingTask = todos.filter(function (todo) {
    return todo._id === idSelectedTask // match parsed variable to our object id
  })[0]
  // send foundTodo as JSON response
  res.json(matchingTask)
})

app.put('/api/todos/:id', function update (req, res) {
  /* This endpoint will update a single todo with the
   * id specified in the route parameter (:id) and respond
   * with the newly updated todo.
   */
   let idSelectedUpdate = parseInt(req.params.id) // parse 0   let matchingTask = todos.filter(function (todo) {
   let matchingTask = todos.filter(function (todo) {
     return todo._id === idSelectedUpdate // match parsed variable to our object id
   })[0];
   idSelectedUpdate.task = req.body.task
   idSelectedUpdate.description = req.body.description

   res.json(idSelectedTask)
})

app.delete('/api/todos/:id', function destroy (req, res) {
  /* This endpoint will delete a single todo with the
   * id specified in the route parameter (:id) and respond
   * with success.
   */
   let idSelectedDeleted
})

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(3000, function () {
  console.log('Server running on http://localhost:3000')
})
