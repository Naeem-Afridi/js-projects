const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");


const newYearDate = new Date("Jan 1, 2025 00:00:00").getTime();

updateCountDown();

function updateCountDown() {
    const now = new Date().getTime();

    const gapOfNewYear = newYearDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gapOfNewYear / day);
    const h = Math.floor((gapOfNewYear % day)/hour);
    const m = Math.floor((gapOfNewYear%hour)/minute);
    const s = Math.floor((gapOfNewYear%minute)/second);

    secondEl.innerHTML = s;
    minuteEl.innerHTML = m;
    hourEl.innerHTML = h;
    dayEl.innerHTML = d;

    setTimeout(updateCountDown, 1000);

}