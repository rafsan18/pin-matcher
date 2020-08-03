const pinGeneratorBtn = document.getElementById("pin-generator-btn");
const generatedPinDisplay = document.getElementById("generated-pin-display");
const number = document.querySelectorAll("[data-number]");
const userInputPinDisplay = document.querySelector(
  "[data-user-input-pin-display]"
);
const cancel = document.querySelector("[data-cancel]");
const backSpace = document.querySelector("[data-backspace]");
const submitBtn = document.querySelector("[data-submit]");
const tryLeftCount = document.getElementById("try-left-count");
let tryLeftCountNumber = parseInt(
  document.getElementById("try-left-count").innerText
);

// Random pin Generator (start)
pinGeneratorBtn.addEventListener("click", function () {
  let pinNumber = Math.floor(Math.random() * (9999 - 1000) + 1000);
  generatedPinDisplay.value = pinNumber;
});

// user pin input (start)
for (let i = 0; i < number.length; i++) {
  const numberBtn = number[i];
  numberBtn.addEventListener("click", function () {
    if (userInputPinDisplay.value.length == 4) {
      return;
    } else {
      userInputPinDisplay.value += numberBtn.innerText;
    }
  });
}

//Cancel Button (C)
cancel.addEventListener("click", function () {
  userInputPinDisplay.value = "";
  document.getElementById("pin-approved").style.display = "none";
  document.getElementById("pin-declined").style.display = "none";
});

// Backspace Button (<)
backSpace.addEventListener("click", function () {
  userInputPinDisplay.value = userInputPinDisplay.value.slice(0, -1);
});

// Submit button
submitBtn.addEventListener("click", function () {
  if (generatedPinDisplay.value == "") {
    return;
  }
  if (generatedPinDisplay.value == userInputPinDisplay.value) {
    document.getElementById("pin-approved").style.display = "block";
    document.getElementById("pin-declined").style.display = "none";
    tryLeftCount.style.display = "none";
  } else {
    document.getElementById("pin-declined").style.display = "block";
    document.getElementById("pin-approved").style.display = "none";
    tryLeftCountNumber--;
    if (tryLeftCountNumber <= 0) {
      submitBtn.disabled = true;
      submitBtn.style.backgroundColor = "grey";
      tryLeftCount.innerText = tryLeftCountNumber + " try left";
    } else {
      tryLeftCount.innerText = tryLeftCountNumber + " try left";
    }
  }
});
