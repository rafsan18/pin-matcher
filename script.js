const pinGeneratorBtn = document.getElementById("pin-generator-btn");
const pinDisplay = document.getElementById("pin-display");
pinGeneratorBtn.addEventListener("click", function () {
  let pinNumber = Math.floor(Math.random() * (9999 - 1000) + 1000);
  pinDisplay.value = pinNumber;
});

// practice

// const submitBtn = document.querySelector("[data-submit]");
// submitBtn.addEventListener("click", function () {
//   let inputField = document.querySelector("[data-input]").value;
//   if (inputField == "1234") {
//     document.getElementById("pin-approved").style.display = "block";
//   } else {
//     document.getElementById("pin-declined").style.display = "block";
//   }
// });
