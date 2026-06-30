const incomeInput = document.getElementById("income");

const button = document.getElementById("btn");

const result = document.getElementById("result");

button.addEventListener("click", () => {
  const income = Number(incomeInput.value);

  if (income <= 0) {
    result.textContent = "Please Enter Valid Income";

    return;
  }

  let tax = 0;

  if (income <= 300000) {
    tax = 0;
  } else if (income <= 600000) {
    tax = income * 0.05;
  } else if (income <= 900000) {
    tax = income * 0.1;
  } else if (income <= 1200000) {
    tax = income * 0.15;
  } else {
    tax = income * 0.2;
  }

  result.textContent = `Estimated Tax = ₹${tax.toFixed(2)}`;
});
