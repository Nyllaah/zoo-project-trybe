const data = require('../data/zoo_data');

const { species } = data;

const countAnimals = (animal) => {
  if (!animal) {
    const amount = {};
    species.forEach(({ name, residents }) => {
      amount[name] = residents.length;
    });
    return amount;
  }
  if (!animal.sex) {
    return species.find(({ name }) => name === animal.species).residents.length;
  }
  return species.find(({ name }) => name === animal.species).residents
    .filter(({ sex }) => sex === animal.sex).length;
};

countAnimals();

module.exports = countAnimals;
