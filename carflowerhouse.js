"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  document.querySelector("#car").addEventListener("click", drive);
}

function drive() {
  gsap.from("#car", { x: "75vw", duration: 3 });

  //document.querySelector("#car").classList.add("carDrive");
}
