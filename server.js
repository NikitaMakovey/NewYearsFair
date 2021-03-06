const sqlite3 = require('sqlite3').verbose()
const app = require('express')()
const bodyParser = require('body-parser')




const db = new sqlite3.Database('db.sqlite3')

db.serialize( () => {
	// инфо по событиям
	db.run("CREATE TABLE IF NOT EXISTS event (id INTEGER PRIMARY KEY, name TEXT NOT NULL, description TEXT NOT NULL, place TEXT NOT NULL, date INTEGER NOT NULL)")
})





app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

// главная страница
app.get('/', function (req, res) {
	res.send('home')
	
	//res.json(req.body);
})


// страница с формой добавления
app.get('/register', function (req, res) {
	res.send('register')
})


// страница с домиками
app.get('/table', function (req, res) {
	res.send('table')
})


// добавление события
app.put('/put', function (req, res) {
	res.send('table')
	console.log(req.body);
})


// json инфа о событиях
app.post('/get', function (req, res) {
	res.send('table')
})


app.listen(80, function () {
	console.log('Example app listening on port 80!');
})








/* Пример запроса
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost/put",
  "method": "PUT",
  "headers": {
    "Content-Type": "application/x-www-form-urlencoded",
    "cache-control": "no-cache",
    "Postman-Token": "067bed56-ccea-4ca6-9605-e1d8a9bf639f"
  },
  "data": {
    "name": "Карнавальная вечеринка мясников",
    "description": "далекие далеки",
    "date": "сегодня",
    "place": "в парке"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response)
})

*/