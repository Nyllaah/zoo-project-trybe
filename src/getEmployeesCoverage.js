const data = require('../data/zoo_data');

const { species, employees } = data;

const getAnimalsNames = (ids) => {
  const animalsNames = [];
  ids.forEach((id) => animalsNames.push(species.find((el) => el.id === id).name));
  return animalsNames;
};

const getLocations = (ids) => {
  const locations = [];
  ids.forEach((id) => locations.push(species.find((el) => el.id === id).location));
  return locations;
};

const createFullCoverage = () => {
  const fullCoverage = [];
  employees.forEach((employee) => {
    fullCoverage.push({
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: getAnimalsNames(employee.responsibleFor),
      locations: getLocations(employee.responsibleFor),
    });
  });
  return fullCoverage;
};

const isEmployee = (list, info) => list.some(({ fullName, id }) =>
  fullName.includes(info[0]) || id === info[0]);

const getEmployeesCoverage = (info) => {
  const fullCoverage = createFullCoverage();
  if (!info) {
    return fullCoverage;
  }
  if (!isEmployee(fullCoverage, Object.values(info))) {
    throw new Error('Informações inválidas');
  }
  return fullCoverage.find(({ id, fullName }) => fullName.includes(info.name) || id === info.id);
};

module.exports = getEmployeesCoverage;
