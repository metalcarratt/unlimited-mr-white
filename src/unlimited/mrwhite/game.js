import Vue from 'vue'
import Vuex from 'vuex'
import stage from './stage.js';
import players from './players.js';
import data from './data.js';
import words from './data/words.js';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        playerTurn: 0,
        secretWord: '',
        fakeWord: '',
        winner: '',
        eliminatedPlayer: {}
    }
});

export default {
    playerTurn: () => store.state.playerTurn,
    eliminatedPlayer: () => store.state.eliminatedPlayer,
    secretWord: () => store.state.secretWord,
    fakeWord: () => store.state.fakeWord,
    winner: () => store.state.winner,

    init() {
        store.state.playerTurn = 0;
        store.state.secretWord = '';
        store.state.fakeWord = '';
        store.state.eliminatedPlayer = {};
        store.state.winner = '';
    },

    startGame() {
        this.chooseWords();
        players.assignRoles();
    },

    chooseWords() {
        const randomWords = words.getRandomWords();
        store.state.secretWord = randomWords.secretWord;
        store.state.fakeWord = randomWords.fakeWord;
    },
    
    resetPlayerTurn() {
        store.state.playerTurn = 0;
    },

    chooseRandomPlayer() {
        const r = Math.floor(Math.random() * players.numberOfPlayers());
        store.state.playerTurn = r;
    },

    nextPlayer() {
        // window.console.log("next player");
        store.state.playerTurn = store.state.playerTurn + 1;
        if (this.playerTurn() >= players.numberOfPlayers()) {
            stage.nextStage();
        }
    },
    
    eliminate(player) {
        // window.console.log(player.name + " eliminated");
        store.state.eliminatedPlayer = player;
        stage.nextStage();
    },

    completeElimination() {
        // console.log("complete elimination");
        store.state.eliminatedPlayer.eliminated = true;
        // console.log(`elimnated ${store.state.eliminatedPlayer.name}`);
        store.state.eliminatedPlayer = {};
        if (players.citizens().length <= 1) {
            // console.log("no citizens left");
            players.badGuysPointsUp();
            store.state.winner = "Imposters and Mr White";
            stage.roundOver();
        } else if (players.badGuys().length === 0) {
            // console.log("no bad guys left");
            players.citizenPointsUp();
            store.state.winner = "Citizens";
            stage.roundOver();
        } else {
            stage.backToTellClues();
        }
    },

    mrWhiteGuess(guess) {
        if (this.secretWord() === guess) {
            players.mrWhitePointsUp();
            store.state.winner = "Mr White";
            stage.roundOver();
        } else {
            this.completeElimination();
        }
    },

    // The word a particular player will see
    revealedWord() {
        const playerRole = players.currentPlayer().role;
        if (playerRole === data.MR_WHITE) {
            return "You are Mr White";
        } else if (playerRole === data.IMPOSTER) {
            return this.fakeWord();
        } else {
            return this.secretWord();
        }
    },

    playAgain() {
        this.init();
        stage.init();
        players.reset();
        this.startGame();
    }
}