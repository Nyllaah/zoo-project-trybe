const data = require('../data/zoo_data');

const { species } = data;

const createObjBase = () => {
  const objBase = {};
  species.forEach(({ location }) => {
    objBase[location] = [];
  });
  return objBase;
};

// const includeAnimals = (objBase) => {
//   species.forEach(({ name, location }) => objBase[location].push(name));
// };

const includeAnimals = (loc) => species.filter(({ location }) => location === loc)
  .map(({ name }) => name);

// const includeNames = (obj, sorted, sex) => {
//   species.forEach(({ name, location, residents }) => {
//     const animalResidents = { [name]: [] };
//     if (sex) {
//       residents.filter(({ sex: sex1 }) => sex === sex1)
//         .forEach(({ name: resident }) => animalResidents[name].push(resident));
//     } else {
//       residents.forEach(({ name: resident }) => animalResidents[name].push(resident));
//     }

//     if (sorted) {
//       animalResidents[name].sort();
//       obj[location].push(animalResidents);
//     } else {
//       obj[location].push(animalResidents);
//     }
//   });
// };

const includeNames = () => {
  return
};

// const getAnimalMap = (options) => {
//   const objBase = createObjBase();
//   if (!options || !options.includeNames) {
//     includeAnimals(objBase);
//   } else {
//     includeNames(objBase, options.sorted, options.sex);
//   }
//   return objBase;
// };

const getAnimalMap = (options) => {
  const locations = species.map(({ location }) => location);
  return locations.reduce((acc, curr) => {
    acc[curr] = (!options || !options.includeNames) ? includeAnimals(curr) : includeNames();
    return acc;
  }, {});
};

module.exports = getAnimalMap;
