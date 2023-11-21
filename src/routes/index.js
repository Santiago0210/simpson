const express = require('express');
const characterRouter = require('./character.router');
const jobRouter = require('./job.router');
const episodeRouter = require('./episode.router');
const carRouter = require('./car.router');
const router = express.Router();

router.use('/characters', characterRouter),
router.use('/jobs', jobRouter),
router.use( '/episodes', episodeRouter),
router.use( '/cars', carRouter),
module.exports = router;
