"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  document.querySelector("#car").addEventListener("click", drive);
}

function drive() {
  document.querySelector("#car").classList.add("carDrive");
}
