import runGame from "./general_logic_game.js";

const isEven = (num) => num % 2 === 0;

const getRound = () => {
    const randomNum = Math.floor(Math.random() * 101);
    const question = String(randomNum);
    const correctAnswer = isEven(randomNum) ? "yes" : "no";
    return { question, correctAnswer };
};

const playEvenGame = () => {
    const description = 'Answer "yes" if the number is even, otherwise answer "no".';
    runGame(description, getRound);
};

export default playEvenGame;
