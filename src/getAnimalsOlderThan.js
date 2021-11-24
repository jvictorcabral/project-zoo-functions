const { species } = require("../data/zoo_data");
const data = require("../data/zoo_data");

const getAnimalsOlderThan = (animal, age) =>
  species
    .find((species) => species.name === animal)
    .residents.every((residents) => residents.age >= age);

module.exports = getAnimalsOlderThan;
