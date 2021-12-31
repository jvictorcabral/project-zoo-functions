const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const firstAnimal = employees.find((employe) => employe.id === id)
    .responsibleFor[0];
  const animals = species.find((specie) => specie.id === firstAnimal).residents;
  const oldestAnimal = animals.reduce((acc, animal) => {
    if (acc.age > animal.age) return acc;
    return animal;
  });
  const array = [];
  array.push(oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age);
  return array;
};

module.exports = getOldestFromFirstSpecies;
