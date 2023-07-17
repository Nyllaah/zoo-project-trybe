const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => ids.map((id) => data.species.find((species) => species.id === id));

// const getSpeciesByIds = (...ids) => {
//   ids.map((id) => {
//     data.species.find((species) => {
//       species.id === id;
//     });
//   });
// };

module.exports = getSpeciesByIds;
