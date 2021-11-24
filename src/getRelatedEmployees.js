const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isManager = (id) =>
  employees.some((employee) => employee.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    return employees
      .filter((manager) => manager.managers.includes(managerId))
      .map((manager) => `${manager.firstName} ${manager.lastName}`);
  }
  throw new Error("O id inserido não é de uma pessoa colaboradora gerente!");
};

module.exports = { isManager, getRelatedEmployees };
