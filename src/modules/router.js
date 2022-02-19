const { Router } = require('express')
const Users = require('./users/users')

const router = new Router()
router
    .get('/users', Users.GET)
    .post('/users', Users.POST)
    .delete('/users', Users.DELETE)

module.exports = router