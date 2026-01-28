import runGame from "./general_logic_game.js";

const getGsd = (num1, num2) => {
    if (num2 === 0) {
        return num1;
    }
    while (num2 !== 0) {
        const temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
};

const getRound = () => {
    const a = Math.floor(Math.random() * 101);
    const b = Math.floor(Math.random() * 101);
    const question = `${a} ${b}`;
    const correctAnswer = String(getGsd(a, b));
    return { question, correctAnswer };
};

const playGsdGame = () => {
    const description = "Find the greatest common divisor of given numbers.";
    runGame(description, getRound);
};

export default playGsdGame;
