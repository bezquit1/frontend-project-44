import runGame from "./general_logic_game.js";

const isPrimeNum = (num) => {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    const centerPointNum = Math.sqrt(num);
    for (let i = 3; i <= centerPointNum; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};
const getRound = () => {
    const randomNum = Math.floor(Math.random() * 101);
    const question = String(randomNum);
    const correctAnswer = isPrimeNum(randomNum) ? "yes" : "no";
    return { question, correctAnswer };
};

const playPrimeGame = () => {
    const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
    runGame(description, getRound);
};

export default playPrimeGame;
