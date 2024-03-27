// Prompt the user to input the marks
const prompt = require("prompt-sync")({ sigint: true });


const grade = prompt("Enter your grade: ")


if(grade >= 79 && grade <= 100) {
    console.log('VeryGood, You got an [A].');
} else if(grade >= 60 && grade < 79) {
    console.log('Good, You got a [B]. ');
} else if(grade >= 49 && grade < 60) {
    console.log('Hi, You got a [C]. ');
} else if(grade >= 40 && grade < 49) {
    console.log('Hi, You got a [D]. ');
} else if(grade < 40){
    console.log('Hi, You got an [E]. ')
} else{
    console.log('Invalid Mark')
}
