const customerModel = require('../models/cursosModels');

const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) throw err;
        customerModel.getAll(conn, (err, result) => {
            if (err) throw err;
            res.render('index', { data: result });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        if (err) throw err;
        customerModel.insert(conn, data, (err, result) => {
            if (err) throw err;
            res.redirect('/');
        });
    });
};

controller.edit = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        if (err) throw err;
        customerModel.getById(conn, id, (err, result) => {
            if (err) throw err;
            res.render('update', { data: result[0] });
        });
    });
};

controller.update = (req, res) => {
    const id = req.params.id;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
        if (err) throw err;
        customerModel.update(conn, id, newCustomer, (err, result) => {
            if (err) throw err;
            res.redirect('/');
        });
    });
};

controller.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        if (err) throw err;
        customerModel.delete(conn, id, (err, result) => {
            if (err) throw err;
            res.redirect('/');
        });
    });
};

controller.incrementVotes = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        if (err) return res.json({ success: false, error: err });

        customerModel.incrementVotes(conn, id, (err) => {
            if (err) return res.json({ success: false, error: err });

            // Obtener el nuevo número de votos para enviar de vuelta al frontend
            customerModel.getVotesById(conn, id, (err, rows) => {
                if (err) return res.json({ success: false, error: err });
                const votos = rows[0].votos;
                res.json({ success: true, votos: votos });
            });
        });
    });
};

module.exports = controller;
