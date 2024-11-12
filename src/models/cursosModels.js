const cursoModel = {};

cursoModel.getAll = (conn, callback) => {
    conn.query('SELECT * FROM customer ORDER BY votos DESC', callback);
};

cursoModel.insert = (conn, data, callback) => {
    conn.query('INSERT INTO customer SET ?', [data], callback);
};

cursoModel.getById = (conn, id, callback) => {
    conn.query('SELECT * FROM customer WHERE id = ?', [id], callback);
};

cursoModel.update = (conn, id, newData, callback) => {
    conn.query('UPDATE customer SET ? WHERE id = ?', [newData, id], callback);
};

cursoModel.delete = (conn, id, callback) => {
    conn.query('DELETE FROM customer WHERE id = ?', [id], callback);
};

cursoModel.incrementVotes = (conn, id, callback) => {
    conn.query('UPDATE customer SET votos = votos + 1 WHERE id = ?', [id]);
};

module.exports = cursoModel;
