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
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

// it's good practice to keep the variable which holds the data in the script and not rely on the DOM to store it
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

// function expression inside of the event handler
document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);

        // when there is not input
        if (!guess) {
            //document.querySelector('.message').textContent = '❓ No number!?'
            displayMessage('❓ No number!?');

            // when player wins
        } else if (guess === secretNumber) {
            //document.querySelector('.message').textContent = '🥳 Correct Number!';
            displayMessage('🥳 Correct Number!');

            document.querySelector('.number').textContent = secretNumber;

            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';

            // highscore
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }

            // whhen guess is wrong
        } else if (guess !== secretNumber) {
            if (score > 1) {
                displayMessage(guess > secretNumber ? '↗️ Too high!' : '↙️ Too low!');
                score--; // deduct 1 point from score
                document.querySelector('.score').textContent = score;
            } else {
                displayMessage('😢 You lose!');
                document.querySelector('.score').textContent = 0;
            }
        };
    });

/*
        // when guess is too high
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '↗️ Too high!';
            score--; // deduct 1 point from score
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '😢 You lose!';
            document.querySelector('.score').textContent = 0;
        }
 
        // when guess is too low
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
*/

// click handler for 'again' button
document.querySelector('.again').addEventListener
    ('click', function () { // this is an anonymous func because it has no name
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        console.log(secretNumber);

        displayMessage('Start guessing...');


        document.querySelector('.score').textContent = score;

        document.querySelector('.number').textContent = '?';

        document.querySelector('.guess').value = '';

        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';

    });