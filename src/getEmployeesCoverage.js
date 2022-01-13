const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const infos = (info) => ({
  id: info.id,
  fullName: `${info.firstName} ${info.lastName}`,
  species: species
    .filter((specie) => info.responsibleFor.includes(specie.id))
    .map((specie) => specie.name),
  locations: species
    .filter((specie) => info.responsibleFor.includes(specie.id))
    .map((specie) => specie.location),
});

const byId = (id) => {
  if (employees.some((employee) => employee.id === id)) {
    const info = employees.find((employee) => employee.id === id);
    return infos(info);
  }
  throw new Error('Informações inválidas');
};

function getEmployeesCoverage(param) {
  if (!param) {
    return employees.map((info) => infos(info));
  }
  const { name, id } = param;
  if (name) {
    const info = employees
      .find((employee) => employee.firstName === name || employee.lastName === name);
    return infos(info);
  }
  return byId(id);
}

module.exports = getEmployeesCoverage;
