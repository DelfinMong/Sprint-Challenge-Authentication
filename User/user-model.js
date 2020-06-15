const db = require('../database/dbConfig');

module.exports = {
    insertUser,
    findBy,
    findById
}

function insertUser(user) {
    return db('users')
    .insert(user)
    .then((ids) => {    return findById(ids[0])    })   
} 

function findBy(user){
    return db('users')
    .where(user)
    .orderBy('id')
}

function findById(id) {
    return db('users')
    .where({ id })
    .first()
}