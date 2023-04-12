const hours_ele = document.getElementById("hours");
const minutes_ele = document.getElementById("minutes");
const seconds_ele = document.getElementById("seconds");
const indicator_ele = document.getElementById("indicator");

console.log(hours_ele);

window.onload = tick();

function tick() {
  const date = new Date();

  const ampm = date.getHours() >= 12 ? "PM" : "AM";

  const hours = date.getHours() % 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  hours_ele.textContent = refactor(hours);
  minutes_ele.textContent = refactor(minutes);
  seconds_ele.textContent = refactor(seconds);
  indicator_ele.textContent = ampm;
}

function refactor(time) {
  if (time < 10) {
    return "0" + time;
  } else {
    return time;
  }
}

setInterval(() => {
  tick();
}, 1000);
