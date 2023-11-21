const Car = require("./Car");
const Character = require("./Character");
const Episode = require("./Episode");
const Job = require("./Job");






Job.hasMany(Character);
Character.belongsTo(Job);

Character.hasMany(Car);
Car.belongsTo(Character);



Character.belongsToMany(Episode, {through: "characterEpisode"});
Episode.belongsToMany(Character, {through: "characterEpisode"});