const textInput = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const result = document.getElementById('result');

const buttonClicked = () => {
  const str = formatString(textInput.value);
  if (str === "") {
    alert("Please input a value");
  } else if (checkPalindrome(str)) {
    result.innerHTML = `
     <span class="bold">${textInput.value}</span> is a palindrome.
    `;
    result.classList.remove('hidden');
  } else {
    result.innerHTML = `
     <span class="bold">${textInput.value}</span> is not a palindrome.
    `;
    result.classList.remove('hidden');
  }
};

const checkPalindrome = (str) => {
  let l = 0;
  let r = str.length - 1;

  while (l < r) {
    if (str[l] === str[r]) {
      l++;
      r--;
      continue;
    } else {
      return false;
    }
  }
  return true;
};

const formatString = (str) => {
  return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}
button.addEventListener("click", buttonClicked);