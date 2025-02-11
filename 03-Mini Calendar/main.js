const monthEl = document.getElementById("month-name");

const dayEl = document.getElementById("day-name");

const dateEl = document.getElementById("day-number");

const yearEl = document.getElementById("year");

let date = new Date();

monthEl.innerHTML = date.toLocaleString("en", {month : "long"});

dayEl.innerHTML = date.toLocaleString("en",{weekday : "long"});

dateEl.innerHTML = date.getDate();

yearEl.innerHTML = date.getFullYear();