//your code here
let input = document.getElementById("input");
let numbers = document.getElementsByClassName("numbers")[0];
let operations = document.getElementsByClassName("operations")[0];
let ans = document.getElementById("ans");
let clr = document.getElementById("clr");

// Add event listeners to number buttons
for (let i = 0; i < numbers.children.length; i++) {
  numbers.children[i].addEventListener("click", function() {
    input.value += numbers.children[i].innerText;
  });
}

// Add event listeners to operation buttons
for (let i = 0; i < operations.children.length; i++) {
  operations.children[i].addEventListener("click", function() {
    input.value += operations.children[i].innerText;
  });
}

// Add event listener to the equal button
ans.addEventListener("click", function() {
  try {
    input.value = eval(input.value);
  } catch (e) {
    input.value = "Error";
  }
});

// Add event listener to the clear button
clr.addEventListener("click", function() {
  input.value = "";
});
``
