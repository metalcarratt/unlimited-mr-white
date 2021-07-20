import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        players: []
    }
});

let randomNames = [
    'Strawberry', 'Tesla', 'Barbie', 'Anderson', 'Bond', 'Scarlet'
]

export default {
    addPlayer() {
        const r = Math.floor(Math.random() * randomNames.length);
        const name = randomNames[r];
        randomNames.splice(r, 1);
        window.console.log(name);
        window.console.log(randomNames);
        store.state.players.push({name});
    },
    removePlayer() {
        if (store.state.players.length > 3) {
            store.state.players.pop();
        }
    },
    players() {
        return store.state.players;
    }
}