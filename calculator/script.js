const display = document.getElementById("display");


const buttons = document.querySelectorAll("button");


let expression = "";


buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    
    if (!isNaN(value) || ["+", "-", "*", "/"].includes(value)) {
      expression += value;
      display.textContent = expression;
    }
    
    else if (value === "C") {
      expression = "";
      display.textContent = "0";
    }
    
    else if (value === "=") {
      try {
        
        const result = eval(expression);
        display.textContent = result;
        expression = result.toString();
      } catch (error) {
        display.textContent = "Error";
        expression = "";
      }
    }
  });
});
