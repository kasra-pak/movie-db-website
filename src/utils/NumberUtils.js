function preventOverflow(num, limit) {
  if (num === limit)
    return 0
  else if (num < 0)
    return (limit - 1)
  else 
    return num
}

function convertToHour(minutes) {
  if (minutes < 60) {
    return minutes + 'min'
  } else {
    return `${Math.floor(minutes / 60)}h ${minutes % 60}min` 
  }
}

export { preventOverflow, convertToHour }