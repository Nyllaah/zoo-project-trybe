const data = require('../data/zoo_data');

const { species, employees } = data;

const getOldestFromFirstSpecies = (id) => {
  const animalId = employees.find((employee) => employee.id === id).responsibleFor[0];
  const { residents } = species.find((el) => el.id === animalId);
  const oldestAnimal = residents.reduce((older, curr) =>
    ((older.age > curr.age) ? older : curr), residents[0]);
  return Object.values(oldestAnimal);
};

module.exports = getOldestFromFirstSpecies;
