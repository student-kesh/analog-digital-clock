let hrs = document.getElementById("hours");
let mins = document.getElementById("minutes");
let secs = document.getElementById("seconds");

let Dhrs = document.getElementById("Dhrs");
let Dmins = document.getElementById("Dmins");
let Dsecs = document.getElementById("Dsecs");

function UpdateDate() {
  let dateElement = document.getElementById("date-header");
  let now = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
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
    "December",
  ];

  let dayName = days[now.getDay()];
  let monthName = months[now.getMonth()];
  let date = now.getDate();
  let year = now.getFullYear();

  dateElement.innerHTML = `${dayName}, ${date} ${monthName} ${year}`;
}
UpdateDate();
setInterval(UpdateDate, 60000);
function DisplayTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  let Hrotation = 30 * h + m / 2;
  let Mrotation = 6 * m;
  let Srotation = 6 * s;

  hrs.style.transform = `rotate(${Hrotation}deg)`;
  mins.style.transform = `rotate(${Mrotation}deg)`;
  secs.style.transform = `rotate(${Srotation}deg)`;
}
setInterval(DisplayTime, 1000);

setInterval(() => {
  Dhrs.innerHTML =
    (new Date().getHours() < 10 ? "0" : "") + new Date().getHours();
  Dmins.innerHTML =
    (new Date().getMinutes() < 10 ? "0" : "") + new Date().getMinutes();
  Dsecs.innerHTML =
    (new Date().getSeconds() < 10 ? "0" : "") + new Date().getSeconds();
}, 1000);
