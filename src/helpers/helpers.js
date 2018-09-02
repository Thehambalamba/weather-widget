export function getIconName(weather, isDay) {
  let iconName = '';
  switch (weather) {
    case 'Clear': 
      if (isDay === 1) {
        iconName = 'sun';
      } else {
        iconName = 'moon';
      }
      break;
    case 'Sunny': 
      if (isDay === 1) {
        iconName = 'sun';
      } else {
        iconName = 'moon';
      }
      break;
    case 'Partly cloudy': 
      if (isDay === 1) {
        iconName = 'cloudy';
      } else {
        iconName = 'cloud';
      }
      break;
    case 'Cloudy': 
      iconName = 'cloud';
      break;
    case 'Overcast': 
      if (isDay === 1) {
        iconName = 'sun';
      } else {
        iconName = 'moon';
      }
      break;
    case 'Mist': 
      if (isDay === 1) {
        iconName = 'sun';
      } else {
        iconName = 'moon';
      }
      break;
    case 'Patchy rain possible': 
      iconName = 'rain';
      break;
    case 'Patchy snow possible': 
      iconName = 'snowing';
      break;
    case 'Patchy sleet possible': 
      if (isDay === 1) {
        iconName = 'sun';
      } else {
        iconName = 'moon';
      }
      break;
    case 'Patchy freezing drizzle possible': 
      iconName = 'rain';
      break;
    case 'Thundery outbreaks possible': 
      iconName = 'rain';
      break;
    case 'Blowing snow': 
      iconName = 'snowing';
      break;
    case 'Blizzard': 
      iconName = 'storm';
      break;
    case 'Fog': 
      if (isDay === 1) {
        iconName = 'sun';
      } else {
        iconName = 'moon';
      }
      break;
    case 'Freezing fog': 
      iconName = 'storm';
      break;
    case 'Patchy light drizzle': 
      iconName = 'rain';
      break;
    case 'Light drizzle': 
      iconName = 'rain';
      break;
    case 'Freezing drizzle': 
      iconName = 'rain';
      break;
    case 'Heavy freezing drizzle': 
      iconName = 'storm';
      break;
    case 'Patchy light rain': 
      iconName = 'rain';
      break;
    case 'Light rain': 
      iconName = 'rain';
      break;
    case 'Moderate rain at times': 
      iconName = 'rain';
      break;
    case 'Moderate rain': 
      iconName = 'rain';
      break;
    case 'Heavy rain at times': 
      iconName = 'rain';
      break;
    case 'Heavy rain': 
      iconName = 'storm';
      break;
    case 'Light freezing rain': 
      iconName = 'rain';
      break;
    case 'Moderate or heavy freezing rain': 
      iconName = 'rain';
      break;
    case 'Light sleet': 
      if (isDay === 1) {
        iconName = 'sun';
      } else {
        iconName = 'moon';
      }
      break;
    case 'Moderate or heavy sleet': 
      if (isDay === 1) {
        iconName = 'sun';
      } else {
        iconName = 'moon';
      }
      break;
    case 'Patchy light snow': 
      iconName = 'snowing';
      break;
    case 'Light snow': 
      iconName = 'snowing';
      break;
    case 'Patchy moderate snow': 
      iconName = 'snowing';
      break;
    case 'Moderate snow': 
      iconName = 'snowing';
      break;
    case 'Patchy heavy snow': 
      iconName = 'snowing';
      break;
    case 'Heavy snow': 
      iconName = 'snowing';
      break;
    case 'Ice pellets': 
      iconName = 'snowing';
      break;
    case 'Light rain shower': 
      iconName = 'rain';
      break;
    case 'Moderate or heavy rain shower': 
      iconName = 'rain';
      break;
    case 'Torrential rain shower': 
      iconName = 'rain';
      break;
    case 'Light sleet showers': 
      iconName = 'rain';
      break;
    case 'Moderate or heavy sleet showers': 
      iconName = 'rain';
      break;
    case 'Light snow showers': 
      iconName = 'rain';
      break;
    case 'Moderate or heavy snow showers': 
      iconName = 'snowing';
      break;
    case 'Light showers of ice pellets': 
      iconName = 'rain';
      break;
    case 'Moderate or heavy showers of ice pellets': 
      iconName = 'rain';
      break;
    case 'Patchy light rain with thunder': 
      iconName = 'rain';
      break;
    case 'Moderate or heavy rain with thunder': 
      iconName = 'storm';
      break;
    case 'Patchy light snow with thunder': 
      iconName = 'storm';
      break;
    case 'Moderate or heavy snow with thunder': 
      iconName = 'storm';
      break;
  
    default:
      iconName = 'sun';
      break;
  }
  return `${iconName}.svg`;
}

export function getDayName(dateStr) {
  let date = new Date(dateStr);
  const dayName = date.toLocaleDateString('en-us', {
    weekday: 'long'
  });
  return `${date.getDate()} ${dayName.toUpperCase()}`;
}

export function getSmallDayName(date) {
  const dateIndex = new Date(date).getDay();
  const daysArr = ['SUN', 'MON', 'TUES', 'WED', 'THURS', "FRI", 'SAT'];
  return daysArr[dateIndex];
}
