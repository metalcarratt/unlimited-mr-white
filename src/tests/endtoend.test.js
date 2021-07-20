import players from '../unlimited/mrwhite/players.js';
import game from '../unlimited/mrwhite/game.js';
import stage from '../unlimited/mrwhite/stage.js';
import data from '../unlimited/mrwhite/data.js';
import { expect } from '@jest/globals';

const SECRET_WORD = 'bread';
const FAKE_WORD = 'toast';

let civilian;
let imposter;
let mrWhite;

beforeEach(() => {
    game.init();
    stage.init();
    players.init();
    civilian = undefined;
    imposter = undefined;
    mrWhite = undefined;
});

const gamePrep = function() {
    players.addPlayer();
    players.addPlayer();
    players.addPlayer();

    expect(players.numberOfPlayers()).toBe(3);
}

const gameInit = function() {
    game.startGame();
    expect(game.secretWord()).toBe(SECRET_WORD);
    expect(stage.isSeeWords()).toBe(true);
}

const testRevealedWord = function() {
    const currentRole = players.currentPlayer().role;
    if (currentRole === data.CIVILIAN) {
        expect(game.revealedWord()).toBe(SECRET_WORD);
        civilian = players.currentPlayer();
    } else if (currentRole === data.IMPOSTER) {
        expect(game.revealedWord()).toBe(FAKE_WORD);
        imposter = players.currentPlayer();
    } else if (currentRole === data.MR_WHITE) {
        expect(game.revealedWord()).toBe('You are Mr White');
        mrWhite = players.currentPlayer();
    }
}

const playRevealedWords = function() {
    testRevealedWord();
    game.nextPlayer();
    testRevealedWord();
    game.nextPlayer();
    testRevealedWord();
    game.nextPlayer();

    expect(civilian !== undefined).toBe(true);
    expect(imposter !== undefined).toBe(true);
    expect(mrWhite !== undefined).toBe(true);

    expect(stage.isTellClues()).toBe(true);
}

const playTellClues = function() {
    stage.nextStage();
    expect(stage.isEliminate()).toBe(true);
}

test('eliminateCivilianTest', () => {
    gamePrep();
    gameInit();
    playRevealedWords();
    playTellClues();

    game.eliminate(civilian);
    expect(stage.isEnd()).toBe(true);
    expect(game.eliminatedPlayer().role).toBe(data.CIVILIAN);
});

test('eliminateImposterTest', () => {
    gamePrep();
    gameInit();
    playRevealedWords();
    playTellClues();

    game.eliminate(imposter);
    expect(stage.isEnd()).toBe(true);
    expect(game.eliminatedPlayer().role).toBe(data.IMPOSTER);
});

test('eliminateMrWhiteTest', () => {
    gamePrep();
    gameInit();
    playRevealedWords();
    playTellClues();

    game.eliminate(mrWhite);
    expect(stage.isEnd()).toBe(true);
    expect(game.eliminatedPlayer().role).toBe(data.MR_WHITE);
});