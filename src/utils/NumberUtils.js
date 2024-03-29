function preventOverflow(num, limit) {
  if (num === limit) return 0;
  else if (num < 0) return limit - 1;
  else return num;
}

function convertToHour(minutes) {
  if (typeof minutes !== "number") {
    return null;
  }

  if (minutes < 60) {
    return minutes + "min";
  } else {
    return `${Math.floor(minutes / 60)}h ${
      minutes % 60 ? `${minutes % 60}min` : ""
    }`;
  }
}

function convertToKilo(number) {
  if (number >= 1000) {
    return `${(number / 1000).toFixed(1)}K`;
  } else {
    return number;
  }
}

export { preventOverflow, convertToHour, convertToKilo };
