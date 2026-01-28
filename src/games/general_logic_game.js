import readlineSync from "readline-sync";

const runGame = (description, getRound) => {
    console.log("Welcome to the Brain Games!");
    const userName = readlineSync.question("May I have your name?: ");
    console.log(`Hello, ${userName}!`);
    console.log(description);

    let correctAnswerCount = 0;
    const roundToWin = 3;

    for (let round = 1; round <= roundToWin; round += 1) {
        const { question, correctAnswer } = getRound();

        console.log(`Question: ${question}`);

        const userAnswer = readlineSync.question("Your answer: ").toLowerCase().trim();

        if (userAnswer !== correctAnswer) {
            console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
Let's try again, ${userName}!`);
            return;
        }
        console.log("Correct!");
        correctAnswerCount += 1;
    }

    if (correctAnswerCount === roundToWin) {
        console.log(`Congratulations, ${userName}!`);
        return;
    }
};

export default runGame;
