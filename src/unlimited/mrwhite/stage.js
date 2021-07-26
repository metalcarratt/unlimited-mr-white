import Vue from 'vue'
import Vuex from 'vuex'
import game from './game.js';

Vue.use(Vuex)

const CHOOSE_PLAYERS = "Choose Players";
const SEE_WORDS = "See Words";
const TELL_CLUES = "Tell Clues";
const END = "End";
const ROUND_OVER = "Round Over";

const store = new Vuex.Store({
    state: {
        stage: CHOOSE_PLAYERS
    }
});

export default {
    isChoosePlayers: () => store.state.stage === CHOOSE_PLAYERS,
    isSeeWords: () => store.state.stage === SEE_WORDS,
    isTellClues: () => store.state.stage === TELL_CLUES,
    isEnd: () => store.state.stage === END,
    isRoundOver: () => store.state.stage === ROUND_OVER,

    init() {
        store.state.stage = SEE_WORDS;
    },

    nextStage() {
        // window.console.log("next stage");
        game.resetPlayerTurn();
        if (this.isChoosePlayers()) {
            store.state.stage = SEE_WORDS;
        } else if (this.isSeeWords()) {
            game.chooseRandomPlayer();
            store.state.stage = TELL_CLUES;
        } else if (this.isTellClues()) {
            store.state.stage = END;
        }
        // window.console.log(`stage set to ${store.state.stage}`);
    },

    backToTellClues() {
        store.state.stage = TELL_CLUES;
    },

    roundOver() {
        console.log("round over");
        store.state.stage = ROUND_OVER;
    }
}