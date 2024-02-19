let firstRandomNumber = Math.floor(Math.random() * 10) + 1;
let secondRandomNumber = Math.floor(Math.random() * 10) + 1;

let numbers = document.getElementById("numbers")
let res = document.getElementById("result")

numbers.innerText = firstRandomNumber + " + " + secondRandomNumber + " = ";
const answer = (firstRandomNumber + secondRandomNumber);

//document.getElementById("result").innerText = answer;

function submitNumber() {
    var inputValue = document.getElementById("numberInput").value;

    if (!isNaN(inputValue)) {
        if (answer != inputValue) {
            window.location.href = "bad.html";
            res.innerText = answer;
        }
        else {
            window.location.href = "good.html";
            var colors = ['#bb0000', '#ffffff'];

            (function frame() {
                confetti({
                    particleCount: 2,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: colors
                });
                confetti({
                    particleCount: 2,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: colors
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            }());
        }
    } else {
        // Якщо введено не число, виводимо повідомлення про помилку
        document.getElementById("result").innerText = "Введіть дійсне число!";
    }


}

function submitNumberPress(event) {
    if (event.key === 'Enter') {
        submitNumber();
    }


}

