const weekName = (day) => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return day > 0 && day < 8 ? days[day - 1] : "Invalid day";
};

let numWeek = 4;

console.log(weekName(numWeek));
