const { getAll, create, getOne, remove, update } = require('../controllers/job.controllers');
const express = require('express');

const jobRouter = express.Router();

jobRouter.route('/')
    .get(getAll)
    .post(create);

jobRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = jobRouter;