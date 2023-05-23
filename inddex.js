"use strict";
const month_ = document.querySelector("#month");
const day_ = document.querySelector("#day");
const hour_ = document.querySelector("#hour");
const min_ = document.querySelector("#min");
const sec_ = document.querySelector("#sec");

const date = new Date(2028, 1, 21, 24, 0, 0);

const countDown = function () {
  const newYearDate = new Date(date);
  const current = new Date();

  const sec = Math.floor((newYearDate - current) / 1000);
  const days = Math.floor(sec / 3600 / 24) % 30;

  const hours = Math.floor(sec / 3600) % 24;
  const min = Math.floor(sec / 60) % 60;
  const s = Math.floor(sec % 60);
  const month = Math.floor(days % 60);

  month_.textContent = month;
  day_.textContent = days;
  hour_.textContent = hours;
  min_.textContent = min;
  sec_.textContent = s;
};
countDown();
setInterval(countDown, 1000);
