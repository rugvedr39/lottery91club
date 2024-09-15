const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'database-2.cvgq00mg64o7.eu-north-1.rds.amazonaws.com',
    port:3306,
    user: 'rugved',
    password: '8600988002',
    database: 'lottery91club',
});

export default connection;