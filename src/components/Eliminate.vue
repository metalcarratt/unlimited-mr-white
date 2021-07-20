<template>
    <div>
        <h2>Eliminate</h2>
        <p>Choose who to eliminate:</p>
        <button v-for="(player, pIter) of players" :key="pIter" @click="eliminatePlayer(player)">{{ player.name }}</button>
    </div>
</template>

<script>
import players from '@/unlimited/mrwhite/players.js';
import game from '@/unlimited/mrwhite/game.js';

export default {
    computed: {
        players: () => players.players()
    },
    methods: {
        eliminatePlayer(player) {
            game.eliminate(player);
        }
    }
}
</script>