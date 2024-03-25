//Prompt the user to user to input speed.

const prompt = require("prompt-sync")({ sigint: true });

const speed = parseFloat(prompt("Speed of the car (in km/h): "));
// Initialize points
let points = 0; 

if (speed <= 70) {
    console.log('ok');
} else if (speed > 70) {
    points = Math.floor((speed - 70)/5);
    console.log('points ' + points);
    if(points >= 12) {
        console.log("License Suspended");
    }
}
