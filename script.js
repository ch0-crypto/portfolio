"use strict";

// // Smooth Scrolling
// $(".btn-showcase").on("click", function (event) {
//   if (this.hash !== "") {
//     event.preventDefault();
//     const hash = this.hash;
//     $(" html,body").animate(
//       {
//         scrollTop: $(hash).offset().top,
//       },
//       400
//     );
//   }
// });

// const myServices = document.querySelector(".services");

// myServices.addEventListener("mouseover", function () {
//   myServices.style.height = "23rem";
//   myServices.style.fontSize = "1rem";
//   myServices.style.width = "50rem";
// });

const form = document
  .querySelector(".btn-footer")
  .addEventListener("click", function () {
    alert("comment submitted");
  });
