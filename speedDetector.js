const prompt = require('prompt-sync')();

function checkSpeed() {
    let speed = parseInt(prompt('Enter car speed: '));
    
    if (isNaN(speed)) {
        console.log("Please enter a valid number for speed.");
        return;
    }

    let demeritPoints = 0;

    if (speed < 70) {
        console.log("Ok");
    } else {
        demeritPoints = Math.floor((speed - 70) / 5);
        console.log(`Points: ${demeritPoints}`);
        if (demeritPoints > 12) {
            console.log("License suspended");
        }
    }
}

checkSpeed();
