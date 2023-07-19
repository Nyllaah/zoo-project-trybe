const data = require('../data/zoo_data');

const { species, hours } = data;

const isAnimal = (scheduleTarget) => species.map(({ name }) => name).some((el) =>
  el === scheduleTarget);

const isDay = (scheduleTarget) => Object.keys(hours).some((el) => el === scheduleTarget);

const getAnimals = (scheduleTarget) => {
  const animals = [];
  species.forEach(({ name, availability }) => {
    if (availability.includes(scheduleTarget)) {
      animals.push(name);
    }
  });
  return animals;
};

const itsOpen = (day) => {
  if (hours[day].open === 0) {
    return false;
  }
  return true;
};

const createSchedule = () => {
  const fullSchedule = {};
  Object.keys(hours).forEach((day) => {
    if (!itsOpen(day)) {
      fullSchedule[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      fullSchedule[day] = {
        officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
        exhibition: getAnimals(day),
      };
    }
  });
  return fullSchedule;
};

const getSchedule = (scheduleTarget) => {
  const fullSchedule = createSchedule();
  if (isDay(scheduleTarget)) {
    return { [scheduleTarget]: fullSchedule[scheduleTarget] };
  }
  if (isAnimal(scheduleTarget)) {
    return species.find(({ name }) => name === scheduleTarget).availability;
  }
  return fullSchedule;
};

module.exports = getSchedule;
