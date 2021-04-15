const displayDigits = document.querySelector("#displayDigits");
const decimalBtn = document.querySelector(".decimalBtn");

let opDone = false;

let operators = [];
let values = [];
let result = 0;

const printDigit = (digit) => {
  if (opDone) {
    clearDigits();
  }

  if (displayDigits.value.includes(".")) {
    decimalBtn.disabled = true;
  }

  displayDigits.value += digit;

  document.querySelectorAll(".opBtn").forEach((op) => {
    op.disabled = false;
  });

  opDone = false;
};

const clearDigits = () => {
  displayDigits.value = "";
  decimalBtn.disabled = false;
};

const operation = (operator) => {
  operators.push(operator);
  values.push(displayDigits.value);
  clearDigits();
  document.querySelector(".btnResult").disabled = false;
  decimalBtn.disabled = false;
};

const calculate = () => {
  values.push(displayDigits.value);

  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === "+") {
      result = parseFloat(values[i]) + parseFloat(values[i + 1]);
    } else if (operators[i] === "-") {
      result = parseFloat(values[i]) - parseFloat(values[i + 1]);
    } else if (operators[i] === "*") {
      result = parseFloat(values[i]) * parseFloat(values[i + 1]);
    } else if (operators[i] === "/") {
      result = parseFloat(values[i]) / parseFloat(values[i + 1]);
    }
  }

  displayDigits.value = parseFloat(result.toFixed(20));
  opDone = true;
  decimalBtn.disabled = false;

  operators = [];
  values = [];
};
