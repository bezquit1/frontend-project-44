import runGame from "./general_logic_game.js";

const getRandomProgression = () => {
    const result = [];

    const startRandomNum = Math.floor(Math.random() * 20) + 1;
    const randomStepNum = Math.floor(Math.random() * 10) + 1;
    const randomLengthArr = Math.floor(Math.random() * (10 - 5 + 1)) + 5;

    for (let index = 0; index < randomLengthArr; index += 1) {
        result.push(startRandomNum + index * randomStepNum);
    }
    return result;
};

const getRound = () => {
    const randomArr = getRandomProgression();
    const randomIndex = Math.floor(Math.random() * randomArr.length);
    const removedValue = randomArr[randomIndex];

    const newArr = [...randomArr];
    newArr[randomIndex] = "..";
    const question = newArr.join(" ");
    const correctAnswer = String(removedValue);
    return { question, correctAnswer };
};

const playProgressionGame = () => {
    const description = "What number is missing in the progression?";
    runGame(description, getRound);
};

export default playProgressionGame;
