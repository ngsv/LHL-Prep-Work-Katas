//Talking Calendar

let monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const talkingCalendar = function(date) {
  let year = date.substring(0, 4);
  let monthNum = Number(date.substring(5, 7));
  let day = Number(date.substring(8));
  let month = "";

  month = monthName[monthNum-1];

  if (day === 1) {
    day = day + "st";
  } else if (day === 2) {
    day = day + "nd";
  } else if (day === 3) {
    day = day + "rd";
  } else {
    day = day + "th";
  }

  return (month + " " + day + ", " + year);

};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
