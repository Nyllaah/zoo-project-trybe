const data = require('../data/zoo_data');

const { employees } = data;

const isManager = (id) => employees.map(({ managers }) => managers).flat()
  .some((manager) => manager === id);

const getRelatedEmployees = (managerId) => {
  let subs = [];
  if (isManager(managerId)) {
    employees.filter((employee) => {
      const { firstName, lastName, managers } = employee;
      if (managers.includes(managerId)) {
        subs.push(`${firstName} ${lastName}`);
      } return subs;
    });
  } else {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } return subs;
};

console.log(getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8'));

module.exports = { isManager, getRelatedEmployees };
