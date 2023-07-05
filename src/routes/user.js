'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controllers/user')

router.post('/', controller.save);
router.get('/', controller.get);
router.get('/:id', controller.getById);
router.put('/', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;