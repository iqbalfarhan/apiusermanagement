import database from '../config/database.js';

// ambil semua data
// SELECT * FROM users;
export const all = () => {
  const users = database.execute('SELECT * FROM users');
  return users;
};

// ambil salahsatu data dengan id
export const find = (id) => {
  const user = database.execute('SELECT * from users where id=?', [id]);
  return user;
};

// insert data
// INSERT INTO users (name, umur) values ('ilyas', 19)
export const create = (name, umur) => {
  const newuser = database.execute(
    'INSERT INTO users (name, umur) values (?,?)',
    [name, umur],
  );

  return newuser;
};

// edit data

export const edit = (id, newData) => {
  const user = database.execute('UPDATE users SET name=?, umur=? where id=?', [
    newData.name,
    newData.umur,
    id,
  ]);

  return user;
};
// delete data

export const destroy = (id) => {
  const user = database.execute('DELETE FROM users WHERE id= ?', [id]);
  return user;
};
