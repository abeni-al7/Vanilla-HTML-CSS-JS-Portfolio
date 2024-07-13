const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convertToRoman = (number) => {
  const conversion = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];

  let result = "";
  for (let i = 0; i < conversion.length; i++) {
    while (conversion[i][0] <= number) {
      number -= conversion[i][0];
      result += conversion[i][1];
    }
  }
  return result;
}

const validateInput = () => {
  const number = parseInt(numberInput.value);
  if (isNaN(number)) {
    output.innerText = "Please enter a valid number";
  } else if (number < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (number >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
  } else {
    output.innerText = convertToRoman(number);
  }
}
convertBtn.addEventListener("click", validateInput);
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    validateInput();
  }
})
