const data = require('../data/zoo_data');

const { adult: priceA, senior: priceS, child: priceC } = data.prices;

const countEntrants = (entrants) => {
  const child = entrants.filter(({ age }) => age < 18).length;
  const adult = entrants.filter(({ age }) => age >= 18 && age < 50).length;
  const senior = entrants.filter(({ age }) => age >= 50).length;
  return {
    child,
    adult,
    senior,
  };
};

const calculateEntry = (entrants) => {
  if (!entrants) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  return parseFloat(((child * priceC) + (adult * priceA) + (senior * priceS)).toFixed(2));
};

module.exports = { calculateEntry, countEntrants };
