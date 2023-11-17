
let string = "";
let buttons = document.querySelectorAll('button');

Array.from(buttons).forEach((button) => {

    try {
        button.addEventListener('click', (e) => {
            if (e.target.innerHTML == '=') {
                string =  eval(string);
                document.querySelector('input').value = string;
            }
            else if (e.target.innerHTML == 'C') {
                string = "";
                document.querySelector('input').value = string;
            }
            else {
                console.log(e.target)
                string = string + e.target.innerHTML;
                document.querySelector('input').value = string;
            }

        })
    } catch (error) {
        display.value = 'Error';
    }

})





// let display = document.getElementById('display');

// function appendToDisplay(value) {
//     display.value += value;
// }

// function clearDisplay() {
//     display.value = '';
// }

// function calculate() {
//     try {
//         display.value = eval(display.value);
//     } catch (error) {
//         display.value = 'Error';
//     }
// }
