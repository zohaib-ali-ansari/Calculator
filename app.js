let screen = document.getElementById("screen");
screen.value = "";
screen.focus();
let expression;
let answer = "";

const valueForDisplay = (input) => {
  if (
    answer != "" &&
    input != "/" &&
    input != "*" &&
    input != "-" &&
    input != "+" &&
    input != "%"
  ) {
    answer = "";
    screen.value = "";
    screen.value += input;
  } else {
    if (
      (screen.value == "" && (input == "/" || input == "*" || input == "+")) ||
      screen.value == "Error" ||
      screen.value == "Infinity"
    ) {
      answer = "";
      screen.value = "";
    } else {
      answer = "";
      screen.value += input;
    }
  }
  screen.focus();
};

const calculateBtn = () => {

  
  expression = screen.value.replace(/\b0+(\d+)/g, "$1");

  if (screen.value === "Error") {
    screen.value = "Error";
 }

 else if (expression) {
    try {
      answer = eval(expression);
      screen.value = answer;
    } catch (e) {
      screen.value = "Error";
    }
  }
};

const cutBtn = () => {
  const cursorPos = screen.selectionStart; 

  if (cursorPos > 0) {
    screen.value =
      screen.value.slice(0, cursorPos - 1) + screen.value.slice(cursorPos);

    screen.setSelectionRange(cursorPos - 1, cursorPos - 1);
    screen.focus();
  }
};

const clearBtn = () => {
  screen.value = "";
  screen.focus();
};

