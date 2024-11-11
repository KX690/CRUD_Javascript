const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller');

router.get('/', controller.list);
router.post('/add', controller.save);
router.get('/delete/:id', controller.delete);

router.get('/update/:id', controller.edit);
router.post('/update/:id', controller.update);

router.get('/increment-votes/:id', controller.incrementVotes);

module.exports = router;