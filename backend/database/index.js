const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 50,
    password: 'Nocremix421!',
    user: 'root',
    host: 'localhost',
    port: '3306',
    database: 'groupomania'
});

let groupomaniaDatabase = {};

groupomaniaDatabase.all = () => {

    return new Promise((resolve, reject) => {

        pool.query(`SELECT * FROM users`, (err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

groupomaniaDatabase.one = (id) => {

    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM users WHERE id = ?`, [id], (err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};

groupomaniaDatabase.one = (id) => {

    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM users WHERE id = ?`, [id], (err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};

module.exports = groupomaniaDatabase;