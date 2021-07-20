import Vue from 'vue'
import Vuex from 'vuex'
import game from './game.js';
import data from './data.js';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        players: []
    }
});

const activePlayers = () => store.state.players.filter(player => !player.eliminated);

let randomNames = [
    'Strawberry', 'Tesla', 'Barbie', 'Anderson', 'Bond', 'Scarlet'
]

export default {
    players: () => activePlayers(),
    allPlayers: () => store.state.players,
    numberOfPlayers: () => activePlayers().length,
    currentPlayer: () => store.state.players[game.playerTurn()],

    init() {
        store.state.players = [];
    },

    reset() {
        store.state.players.forEach(player => {
            player.role = undefined;
            player.eliminated = false;
        });
    },

    addPlayer() {
        const r = Math.floor(Math.random() * randomNames.length);
        const name = randomNames[r];
        randomNames.splice(r, 1);
        // window.console.log(name);
        // window.console.log(randomNames);
        store.state.players.push({
            name,
            score: 0,
            eliminated: false
        });
    },
    
    removePlayer() {
        if (store.state.players.length > 3) {
            store.state.players.pop();
        }
    },
    
    assignRoles() {
        const numberOfImposters = this.numberOfPlayers() > 4 ? 2 : 1;

        store.state.players.forEach(player => player.role = undefined);

        this.assignRole(data.MR_WHITE);
        for (let i = 0; i < numberOfImposters; i++) {
            this.assignRole(data.IMPOSTER);
        }
        store.state.players.forEach(player => {
            if (!player.role) {
                player.role = data.CIVILIAN;
            }
        });
        
        // window.console.log("-== Roles ==-");
        // store.state.players.forEach(player => window.console.log(player.name + " - " + player.role));
    },

    assignRole(role) {
        let r = Math.floor(Math.random() * this.numberOfPlayers());
        if (!store.state.players[r].role) {
            store.state.players[r].role = role;
        } else {
            this.assignRole(role);
        }
    },

    citizens() {
        console.log("all players");
        console.log(store.state.players);
        const ret = store.state.players.filter(player => !player.eliminated && player.role === data.CIVILIAN);
        console.log(ret);
        return ret;
    },

    citizenPointsUp() {
        this.citizens().forEach(player => player.score = player.score + 1);
    },

    badGuys() {
        return store.state.players.filter(player => !player.eliminated && player.role !== data.CIVILIAN);
    },

    badGuysPointsUp() {
        this.badGuys().forEach(player => player.score = player.score + 1);
    },

    mrWhitePointsUp() {
        const mrWhite = store.state.players.filter(player => player.role === data.MR_WHITE);
        mrWhite.score = mrWhite.score + 1;
    }
}