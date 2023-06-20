const carMakers = ['ford','toyota','chevy'];
const dates = [new Date()];

const carsByMake = [];

// help with inference when extracting vals
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent inserting incompatible vals
carMakers.push(10);

// help with methods like map
carMakers.map((car:string): string => {
  return car;
});

// flexible dates
// strings and dates
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');