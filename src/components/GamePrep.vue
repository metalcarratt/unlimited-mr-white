<template>
    <div class="page">
        <h1>Unlimited Mr White</h1>
        <h2>New Game</h2>
        <p>
            <span>Players: {{ players.length }}</span>
            <button class="mini" @click="removePlayer">-</button>
            <button class="mini" @click="addPlayer">+</button>    
        </p>
        <fieldset v-for="(player, pIter) of players" :key="pIter">
            <label>Player {{ pIter + 1 }}</label>
            <input type="text" v-model="player.name" />
        </fieldset>
        <button @click="start">Start</button>
    </div>
</template>

<script>
import players from '@/unlimited/mrwhite/players.js';

export default {
    computed: {
        players() {
            window.console.log("getting players");
            return players.players();
        }
    },
    mounted() {
        players.addPlayer();
        players.addPlayer();
        players.addPlayer();
    },
    methods: {
        addPlayer() {
            players.addPlayer();
        },
        removePlayer() {
            players.removePlayer();
        },
        start() {
            this.$router.push('/play');
        }
    }
}
</script>