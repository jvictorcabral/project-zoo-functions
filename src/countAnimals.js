const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (animal === undefined) {
    return species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  }

  const findAnimals = species.find(
    (specie) => specie.name === animal.specie,
  ).residents;
  if (animal.sex === undefined) {
    return findAnimals.length;
  }
  return findAnimals.reduce((acc, specie) => {
    const animalSex = animal.sex;
    return specie.sex === animalSex ? acc + 1 : acc;
  }, 0);
};

console.log(countAnimals);

module.exports = countAnimals;
