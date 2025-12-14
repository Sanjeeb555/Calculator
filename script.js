let s = "";
let operators = ["+", "-", "*", "/"];

function fetchButton(event) {
    const btn = event.target.innerText;
    const display = document.querySelector(".text");

    if (btn === "AC") {
        s = "";
        display.innerText = "";
        return;
    }

    if (btn === "=") {
        calculateResult();
        return;
    }
    
    if (btn == "+" || btn == "-" || btn == "*" || btn == "/") {
        if (s == "") {
            return;
        }
        validate(btn);
    }else {
        s =s+btn;
    }

    display.innerText = s;
    display.scrollLeft = display.scrollWidth;
}

function validate(btn) {
   const lastChar = s[s.length - 1];
    if (lastChar == "+" || lastChar == "-" || lastChar == "*" || lastChar == "/") {

        s = s.substring(0, s.length - 1) + btn;
        console.log(s);
    }
    else {
        s = s + btn;
    }
}

function calculateResult() {
    const display = document.querySelector(".text");

    let idx;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "+" || s[i] == "-" || s[i] == "*" || s[i] == "/") {
            idx = i;
        }
    }
    const op = s[idx];
    let operands = s.split(s[idx]);
    console.log(operands);

    let res;
    let left = Number(operands[0]);
    let right = Number(operands[1]);
    // console.log(left, right, left + right);

    switch (op) {
        case "+":
            res = left + right;
            break;
        case "-":
            res = left - right;
            break;
        case "*":
            res = left * right;
            break;
        case "/":
            res = left / right;
            break;
        default:
            res = "Enter Number";
    }

    display.innerText = `${s} = ${res}`;
    // display.innerHTML=res
    s = res.toString();
    display.scrollLeft = display.scrollWidth;
}

function deleteLast() {
    if (s.length > 0) {
        s = s.substring(0, s.length - 1);

        const display = document.querySelector(".text");
        display.innerText = s;
        display.scrollLeft = display.scrollWidth;
    }
}