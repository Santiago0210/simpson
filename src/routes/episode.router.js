const { getAll, create, getOne, remove, update } = require('../controllers/episode.controllers');
const express = require('express');

const episodeRouter = express.Router();

episodeRouter.route('/')
    .get(getAll)
    .post(create);

episodeRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = episodeRouter;