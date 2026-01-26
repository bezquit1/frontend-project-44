import readlineSync from "readline-sync";
import { greetUser } from "../cli.js";

const UserName = greetUser();

const getRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 101);
    console.log(`Question: ${randomNum}`);
    return randomNum;
};

const isEven = (num) => num % 2 === 0;

export const playEvenGame = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let correctAnswerCount = 0;
    const roundToWin = 3;

    for (let round = 1; round <= roundToWin; round += 1) {
        const randomNum = getRandomNum();
        const userAnswer = readlineSync.question("Your answer: ").toLowerCase().trim();
        const correctAnswer = isEven(randomNum) ? "yes" : "no";

        if (userAnswer !== correctAnswer) {
            console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
Let's try again, ${UserName}!`);
            return;
        }
        console.log("Correct!");
        correctAnswerCount += 1;
    }

    if (correctAnswerCount === roundToWin) {
        console.log(`Congratulations, ${UserName}`);
    }
};
