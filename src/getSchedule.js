const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;
console.log(species[0].name);

// fazer um objeto com os dias da semana
// // aproveitar o objeto hours
// // substituir o valor com as duas keys
// // cada dia da semana tem que ter duas keys: officeHour, exhibiton

// officehour tem que conter a frase 'Open from 8am until 6pm'
// // pegar os horarios e colocar na frase

// exhibition tem que conter os animais que estao disponiveis nesse dia
const animalOrDay = (scheduleTarget) => {
  const days = Object.keys(hours);
  const animals = Object.values(species[0].name);
  console.log(animals);
};

animalOrDay('lion');

const getAnimals = (day) => {
  const animals = [];
  species.forEach(({ name, availability }) => {
    if (availability.includes(day)) {
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

const createSchedule = () => Object.keys(hours).forEach((day) => {
  if (!itsOpen(day)) {
    hours[day] = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  } else {
    hours[day] = {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: getAnimals(day),
    };
  }
});


const getSchedule = (scheduleTarget) => {
  if (scheduleTarget === undefined) {
    return createSchedule();
  }
  return species.find(({ name }) => name === scheduleTarget).availability;
};

getSchedule();

module.exports = getSchedule;
