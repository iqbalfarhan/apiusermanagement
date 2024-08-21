import mysql from 'mysql2';

const database = mysql.createConnection({
  database: 'usermanagement',
  user: 'admin',
  password: 'adminoke',
});

export default database.promise();
