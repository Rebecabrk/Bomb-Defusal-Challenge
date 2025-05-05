const MAX_ROUNDS = 3;
const correctCodes = ['1234567890', '5678901234', '9012345678'];

let currentRound = 0;

function checkCode(code) {
    console.log(correctCodes[currentRound]);
    console.log(code);
    if (currentRound >= MAX_ROUNDS) {

        return { status: 'finished', message: 'All codes already entered!', };
    }

    if (code === correctCodes[currentRound]) {
        currentRound++;
        if (currentRound == MAX_ROUNDS) {
            return { status: 'finished', message: 'Bomb disarmed! All codes correct!' };
        }
        return { status: 'success', message: `Correct code! ${MAX_ROUNDS - currentRound} codes left.` };
    } else {
        return { status: 'fail', message: `Incorrect code.` };
    }
}

function resetGame() {
    currentRound = 0;
    console.log("Game reset.");
}

module.exports = { checkCode, resetGame };