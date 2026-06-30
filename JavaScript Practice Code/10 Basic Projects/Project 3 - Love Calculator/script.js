const button = document.getElementById("btn");

const yourName = document.getElementById("yourName");

const partnerName = document.getElementById("partnerName");

const result = document.getElementById("result");

button.addEventListener("click", () => {
  const name1 = yourName.value.trim();

  const name2 = partnerName.value.trim();

  if (name1 === "" || name2 === "") {
    result.textContent = "Please Enter Both Names";

    return;
  }

  const percentage = Math.floor(Math.random() * 101);

  let message = "";

  if (percentage >= 90) {
    message = "Perfect Match";
  } else if (percentage >= 70) {
    message = "Great Compatibility";
  } else if (percentage >= 50) {
    message = "Good Friendship";
  } else {
    message = "Keep Trying";
  }

  result.textContent = `${name1} ${name2}
         = ${percentage}% Love
         (${message})`;
});
