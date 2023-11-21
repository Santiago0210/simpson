const catchError = require('../utils/catchError');
const Character = require('../models/Character');
const Episode = require('../models/Episode');
const Car = require('../models/Car');
const Job = require('../models/Job');

const getAll = catchError(async(req, res) => {
    const results = await Character.findAll({include: [Episode, Car, Job]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Character.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Character.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Character.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Character.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});
const setCharacterEpisode = catchError(async(req, res) =>{
    const {id} =req.params;
    const character = await Character.findByPk(id);
    await character.setEpisodes(req.body);
     return res.json(character);  
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setCharacterEpisode
}