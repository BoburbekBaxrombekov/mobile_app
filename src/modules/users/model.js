const { fetch, fetchAll } = require('../../lib/postgres')

const USERS = `
    SELECT
        *
    FROM
        users
`
const NEW_USER = `
    INSERT INTO users(adressUser, messageUser) VALUES ($1, $2)
`

const DEL_USER = `
    DELETE FROM users WHERE user_id = $1
`


const allUsers = () => fetchAll(USERS)
const newUser = (adress, message) => fetchAll(NEW_USER, adress, message)
const delUser = (userId) => fetchAll(DEL_USER, userId)


module.exports = {
    allUsers,
    newUser,
    delUser
}