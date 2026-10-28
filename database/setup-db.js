const fs = require('fs')
require('dotenv').config()

const sql = fs.readFileSync(__dirname + '/setup.sql').toString()

const db = require('./db')

db.query(sql)
    .then(data => console.log('Database setup complete'))
    .catch(err => console.log('Error setting up database', err))