
if (sessionStorage.getItem('check') === null) {
    sessionStorage.setItem('check', true);
    sessionStorage.setItem('rightAnswer', 0);
}

if (JSON.parse(sessionStorage.getItem('check'))) {
    sessionStorage.setItem('fNum', Math.floor(Math.random() * 10) + 1);
    sessionStorage.setItem('sNum', Math.floor(Math.random() * 10) + 1);
}

const firstRandomNumber = parseInt(sessionStorage.getItem('fNum'));
const secondRandomNumber = parseInt(sessionStorage.getItem('sNum'));


const numbers = document.getElementById("numbers")

numbers.innerText = firstRandomNumber + " + " + secondRandomNumber + " = ";

const rAnswer = document.getElementById("right-anwsver");
rAnswer.innerText = sessionStorage.getItem('rightAnswer');

const answer = (firstRandomNumber + secondRandomNumber);

function submitNumber() {
    let inputValue = parseInt(document.getElementById("numberInput").value);

    if (!isNaN(inputValue)) {
        if (answer != inputValue) {
            sessionStorage.setItem('check', false);
            window.location.href = "bad.html";
        }
        else {
            sessionStorage.setItem('check', true);
            let i = parseInt(sessionStorage.getItem('rightAnswer'));
            i++;
            sessionStorage.setItem('rightAnswer', i);
            window.location.href = "good.html";
        }
    } else {
        document.getElementById("result").innerText = "Введіть дійсне число!";
    }
}

function submitNumberPress(event) {
    if (event.key === 'Enter') {
        submitNumber();
    }
}
