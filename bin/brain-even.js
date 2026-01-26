import readlineSync from "readline-sync";
import { greetUser } from "../src/cli.js";

const UserName = greetUser();

const getRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 101);
    console.log(`Question: ${randomNum}`);
    return randomNum;
};

const isEven = (num) => num % 2 === 0;

const getYesNoAnswer = () => {
    while (true) {
        const answer = readlineSync.question("Your answer: ").toLowerCase().trim();
        if (answer === "yes" || answer === "no") {
            return answer;
        }
    }
};

export const playEvenGame = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let correctAnswerCount = 0;
    const roundToWin = 3;

    for (let round = 1; round <= roundToWin; round += 1) {
        const randomNum = getRandomNum();
        const userAnswer = getYesNoAnswer();
        const correctAnswer = isEven(randomNum) ? "yes" : "no";

        if (userAnswer === correctAnswer) {
            console.log("Correct!");
            correctAnswerCount += 1;
        } else {
            console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
Let's try again, ${UserName}!`);
            correctAnswerCount = 0;
            return;
        }
    }

    if (correctAnswerCount === roundToWin) {
        console.log(`Congratulations, ${UserName}`);
    }
};
