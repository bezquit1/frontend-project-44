import readlineSync from "readline-sync";
import { greetUser } from "../cli.js";

const UserName = greetUser();

const operators = ['+', '-', '*'];
const getRandomExpression = () => {
    const a = Math.floor(Math.random() * 101);
    const b = Math.floor(Math.random() * 101);
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const generateExpression = `${a} ${operator} ${b}`;
    console.log(`Question: ${generateExpression}`);
    return generateExpression;
};

const calculate = (expression) => {

    const parts = expression.split(' ');
    const a = parseInt(parts[0]);
    const operator = parts[1];
    const b = parseInt(parts[2]);

    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        default:
            return 0;
    }
}

export const playEvenGame = () => {
    console.log('What is the result of the expression?');

    let correctAnswerCount = 0;
    const roundToWin = 3;

    for (let round = 1; round <= roundToWin; round += 1) {
        const randomExpression = getRandomExpression();
        
        const userAnswer = readlineSync.question("Your answer: ").toLowerCase().trim();
        const userAnswerInt = parseInt(userAnswer)
        const correctAnswer = calculate(randomExpression);

        if (userAnswerInt !== correctAnswer) {
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