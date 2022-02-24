'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🥳Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// secret number that is checked against user input
// number is randomly generated and then truncated to round the decimal
const secretNumber = Math.trunc(Math.random() * 21);
document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber);

// it's good practice to keep the variable which holds the data in the script and not rely on the DOM to store it
let score = 20;

// function expression inside of the event handler
document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);
        if (!guess) {
            document.querySelector('.message').textContent = '❓ No number!?'
        } else if (guess === secretNumber) {
            document.querySelector('.message').textContent = '🥳 Correct Number!';
        } else if (guess > secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = '↗️ Too high!';
                score--; // deduct 1 point from score
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = '😢 You lose!';
                document.querySelector('.score').textContent = 0;
            }
        } else if (guess < secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = '↙️ Too low!';
                score--; // deduct 1 point from score
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = '😢 You lose!';
            }
            document.querySelector('.score').textContent = score;
        }
    });