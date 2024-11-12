const customerModel = {};

customerModel.getAll = (conn, callback) => {
    conn.query('SELECT * FROM customer ORDER BY votos DESC', callback);
};

customerModel.insert = (conn, data, callback) => {
    conn.query('INSERT INTO customer SET ?', [data], callback);
};

customerModel.getById = (conn, id, callback) => {
    conn.query('SELECT * FROM customer WHERE id = ?', [id], callback);
};

customerModel.update = (conn, id, newData, callback) => {
    conn.query('UPDATE customer SET ? WHERE id = ?', [newData, id], callback);
};

customerModel.delete = (conn, id, callback) => {
    conn.query('DELETE FROM customer WHERE id = ?', [id], callback);
};

customerModel.incrementVotes = (conn, id, callback) => {
    conn.query('UPDATE customer SET votos = votos + 1 WHERE id = ?', [id]);
};

module.exports = customerModel;