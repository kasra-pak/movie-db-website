const getMonthName = index => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  return months[index];
};

const parseDate = dateStr => {
  const date = new Date(Date.parse(dateStr));
  const year = date.getFullYear();
  const month = getMonthName(date.getMonth());
  const day = date.getDate();

  return `${month} ${day}, ${year}`;
};

export { getMonthName, parseDate };
