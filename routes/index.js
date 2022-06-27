var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
	const values = ['BMW', 'Ford', 'Seed', 'Echo Sport']

	const person = { name: 'John', comment: { comments: 'This is samble Comment', date: '10-23-2022' } }

	const user = { name: 'Insaf', admin: true }

	const date = { times: new Date() }

	res.render('index', { values, person, user, date })
})

module.exports = router
