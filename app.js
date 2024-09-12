require('dotenv').config();
const express = require('express');
const app = express();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql'
});

const User = sequelize.define('User', {
    name: Sequelize.STRING,
    age: Sequelize.INTEGER
});

sequelize.sync().then(() => {
    return User.create({
        name: 'Bob',
        age: 22
    });
});

app.get('/', (req, res) => {
    User.findAll().then(users => {
        res.send(users.map(user => user.name));
    });
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});