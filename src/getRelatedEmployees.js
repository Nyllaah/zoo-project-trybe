const data = require('../data/zoo_data');

const { employees } = data;

const isManager = (id) => employees.map(({ managers }) => managers).flat()
  .some((manager) => manager === id);

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.filter(({ managers }) => managers.includes(managerId))
    .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
};

module.exports = { isManager, getRelatedEmployees };
