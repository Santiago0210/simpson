const { getAll, create, getOne, remove, update, setCharacterEpisode } = require('../controllers/character.controllers');
const express = require('express');

const characterRouter = express.Router();

characterRouter.route('/')
    .get(getAll)
    .post(create);

characterRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);
characterRouter.route('/:id/episodes')
       .post(setCharacterEpisode);
module.exports = characterRouter;