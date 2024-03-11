document.addEventListener("DOMContentLoaded", function () {

    
    let one = document.querySelector("#one");
    let two = document.querySelector("#two");
    let three = document.querySelector("#three");
    let four = document.querySelector("#four");
    let five = document.querySelector("#five");
    let six = document.querySelector("#six");
    let seven = document.querySelector("#seven");
    let eight = document.querySelector("#eight");
    let nine = document.querySelector("#nine");
    let zero = document.querySelector("#zero");
    let plus = document.querySelector("#plus");
    let minus = document.querySelector("#minus");
    let times = document.querySelector("#times");
    let divide = document.querySelector("#divide");
    let clear = document.querySelector("#clear");
    let deleteS = document.querySelector("#delete");
    let point = document.querySelector("#point");
    let modulus = document.querySelector("#modulus");
    let equal = document.querySelector("#equal");
    let exponent = document.querySelector("#exponent");
    let screen = document.querySelector("#screen");
    // event listener for clicking on the screen
    screen.addEventListener("click", function () {
        screen.contentEditable = true;
        screen.focus();
       
    });

    one.onclick = function () {screen.innerHTML += "1";}; 
    two.onclick = function () { screen.innerHTML += "2"; };
    three.onclick = function () { screen.innerHTML += "3"; };
    four.onclick = function () { screen.innerHTML += "4"; };
    five.onclick = function () { screen.innerHTML += "5"; };
    six.onclick = function () { screen.innerHTML += "6"; };
    seven.onclick = function () { screen.innerHTML += "7"; };
    eight.onclick = function () { screen.innerHTML += "8"; };
    nine.onclick = function () { screen.innerHTML += "9"; };
    zero.onclick = function () { screen.innerHTML += "0"; };
    point.onclick = function () { screen.innerHTML += "."; };
    exponent.onclick = function () { screen.innerHTML += "^"; };
    minus.onclick = function () { screen.innerHTML += "-"; };
    plus.onclick = function () { screen.innerHTML += "+"; };
    divide.onclick = function () { screen.innerHTML += "/"; };
    times.onclick = function () { screen.innerHTML += "*"; };
    deleteS.onclick = takeBack;
    clear.onclick = bye;
    modulus.onclick = function () { screen.innerHTML += "%"; };
    equal.onclick = solve;


    function takeBack() {
        let newStr = screen.innerHTML.slice(0,-1);
        screen.innerHTML = newStr;
    }
    function bye() {
        screen.innerHTML = "";
        screen.contentEditable = false;
    }
    function solve() {
        let sub = screen.innerHTML;
        sub = sub.replace("^","**");
        try {
            let result = eval(sub);
            screen.innerHTML = result;
        } catch (error) {
            screen.innerHTML = "Error";
        }
    }
 
});


document.addEventListener("keydown", function(event) {
    if (screen.contentEditable) {
        handleInput(event.key);
        event.preventDefault();
    }
    console.log(event)
});

function handleInput(key) {
    const validKeys = [
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        ".", "+", "-", "*", "/", "%", "(", ")", "Enter", "Backspace", "Escape"
    ];

    if (validKeys.includes(key)) {
        if (key === "Enter") {
            solve();
        } else if (key === "Backspace") {           
            takeBack();
        } else if (key === "Escape") {           
            bye();
        } else {           
            screen.textContent += key;
        }
    }
    else{
        screen.textContent += "";
    }
}


