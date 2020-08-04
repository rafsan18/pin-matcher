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

// functions
function submitButtonDisabled() {
  submitBtn.disabled = true;
  submitBtn.style.backgroundColor = "rgba(73, 91, 195, .3)";
}

function promptResponse(idBlock, idNone, isClear) {
  isClear
    ? (document.getElementById(idBlock).style.display = "none")
    : (document.getElementById(idBlock).style.display = "block");
  document.getElementById(idNone).style.display = "none";
}

function reset() {
  tryLeftCountNumber = 3;
  tryLeftCount.innerText = tryLeftCountNumber + " try left";
  tryLeftCount.style.display = "block";
  submitBtn.disabled = false;
  submitBtn.style.backgroundColor = "#495bc3";
  userInputPinDisplay.value = "";
  promptResponse("pin-approved", "pin-declined", true);
}

// Random pin Generator
pinGeneratorBtn.addEventListener("click", function () {
  let pinNumber = Math.floor(Math.random() * (9999 - 1000) + 1000);
  generatedPinDisplay.value = pinNumber;
  reset();
});

// user pin input
for (let i = 0; i < number.length; i++) {
  const numberBtn = number[i];
  numberBtn.addEventListener("click", function () {
    if (userInputPinDisplay.value.length == 4) {
      return;
    }
    userInputPinDisplay.value += numberBtn.innerText;
  });
}

//Cancel Button (C)
cancel.addEventListener("click", function () {
  userInputPinDisplay.value = "";
  promptResponse("pin-approved", "pin-declined", true);
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
    promptResponse("pin-approved", "pin-declined", false);
    tryLeftCount.style.display = "none";
    submitButtonDisabled();
  }
  if (generatedPinDisplay.value != userInputPinDisplay.value) {
    promptResponse("pin-declined", "pin-approved", false);
    tryLeftCountNumber--;
    if (tryLeftCountNumber <= 0) {
      submitButtonDisabled();
    }
    tryLeftCount.innerText = tryLeftCountNumber + " try left";
  }
});
