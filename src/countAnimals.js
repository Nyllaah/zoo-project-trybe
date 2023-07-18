const data = require('../data/zoo_data');

const { species } = data;

const countAnimals = (animal) => {
  if (animal === undefined) {
    const amount = {};
    species.forEach(({ name, residents }) => {
      amount[name] = residents.length;
    });
    return amount;
  }
  if (animal.sex === undefined) {
    return species.find(({ name }) => name === animal.species).residents.length;
  }
  return species.find(({ name }) => name === animal.species).residents
    .filter(({ sex }) => sex === animal.sex).length;
};

countAnimals({ species: 'giraffes', sex: 'female' });

module.exports = countAnimals;
