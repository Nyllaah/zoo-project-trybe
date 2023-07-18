const data = require('../data/zoo_data');

const { species } = data;

const countAnimals = (animal) => {
  const amount = {};
  if (animal === undefined) {
    species.map(({ name, residents }) => {
      amount[name] = residents.length;
    });
    return amount;
  }
};

countAnimals();

module.exports = countAnimals;
