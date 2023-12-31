const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => data.species.find((species) => species.name === animal)
  .residents.every((resident) => resident.age >= age);

module.exports = getAnimalsOlderThan;
