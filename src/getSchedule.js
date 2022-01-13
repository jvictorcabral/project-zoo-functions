const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const animalSchedule = (day) => species.reduce((acc, curr) => {
  if (curr.availability.includes(day)) {
    acc.push(curr.name);
  }
  return acc;
}, []);

const days = () => {
  const schedule = Object.entries(hours).reduce((acc, curr) => {
    acc[curr[0]] = {
      officeHour: `Open from ${hours[curr[0]].open}am until ${hours[curr[0]].close}pm`,
      exhibition: animalSchedule(curr[0]),
    };
    return acc;
  }, {});
  schedule.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return schedule;
};

const getSchedule = (schedule) => {
  let result = 0;
  if (Object.keys(hours).filter((day) => day).includes(schedule)) {
    result = { [schedule]: days()[schedule] };
  } else if (species.filter((animals) => animals).map((animalNames) => animalNames.name)
    .includes(schedule)) {
    result = species.filter((animals) => animals.name === schedule)
      .map((animal) => animal.availability).find((arr) => arr);
  } else {
    result = days();
  }
  return result;
};

module.exports = getSchedule;
