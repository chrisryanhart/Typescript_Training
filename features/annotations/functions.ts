const add = (a: number,b: number): number => {
  return a + b;
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

// const logWeather = (forecast: {date: Date, weather: string}): void => {
//   console.log(forecast.date);
//   console.log(forecast.weather);
// }

// destructured
const logWeather = ({date,weather}: {date: Date, weather: string}): void => {
  console.log(date);
  console.log(weather);
}

logWeather(todaysWeather);