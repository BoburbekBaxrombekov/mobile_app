const {allUsers, newUser, delUser} = require('./model')

module.exports = {
    GET: async(req, res) => {
        try {
            const users = await allUsers()
            res.send(users)
        } catch(err) {
            console.log(err.message)
        }
    },
    POST: async(req, res) => {
        try {
            const new_user = await newUser(req.body.adressUser, req.body.messageUser)
            res.sendStatus(200)
        } catch(err) {
            console.log(err.message)
        }
    },
    DELETE: async(req, res) => {
        try {
            const del_user = await delUser(req.body.userId)
            res.send(200)
        } catch(err) {
            console.log(err.message)
        }
    }
}