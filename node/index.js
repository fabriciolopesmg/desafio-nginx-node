const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const connection = mysql.createConnection(config)
  
const createTable  = `CREATE TABLE IF NOT EXISTS nodedb.people (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL);`
connection.query(createTable);

const sql = `INSERT INTO people (name) values ('Fabricio Lopes')`
connection.query(sql)

const getUsers = `SELECT id, name FROM people`;

app.get('/', async (req,res) => {
   
    const getUsers = `SELECT id, name FROM people`;
    connection.query(getUsers, (error, results, fields) => {
    
        for(let people of results) {  
            Users = `${people.name}`;
        };

        res.send('<h1>Full Cycle Rocks! </h1><br/>'+'<h2>'+Users+'</h2>')
    });

    connection.end()
    
})


app.listen(port, () => {
    console.log('Rodando na porta '+port)
})