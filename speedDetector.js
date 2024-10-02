// speedDetector.js

function checkSpeed(speed) {
    const speedLimit = 70;
    if (speed < speedLimit) {
        return "Ok";
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / 5);
        if (demeritPoints > 12) {
            return "License suspended";
        }
        return `Points: ${demeritPoints}`;
    }
}

// Example usage
const speed = prompt("Enter the speed of the car:");
console.log(checkSpeed(Number(speed)));
