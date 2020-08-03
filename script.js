const pinGeneratorBtn = document.getElementById("pin-generator-btn");
const generatedPinDisplay = document.getElementById("generated-pin-display");
const number = document.querySelectorAll("[data-number]");

// Random pin Generator (start)
pinGeneratorBtn.addEventListener("click", function () {
  let pinNumber = Math.floor(Math.random() * (9999 - 1000) + 1000); //generated pin between 1000 and 9999.
  generatedPinDisplay.value = pinNumber;
});
// Random pin Generator (end)

for (let i = 0; i < number.length; i++) {
  const numberBtn = number[i];
  numberBtn.addEventListener("click", function () {
    console.log(numberBtn.innerText);
  });
}
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
