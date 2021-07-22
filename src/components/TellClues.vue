<template>
    <div>
        <h2>Tell Clues</h2>
        <p>
            Tell clues - each player give a clue to their word, starting with
            the highlighted player.
        </p>
        <Profile v-for="(player, pIter) of players" :key="pIter" :player="player" :active="player.name === currentPlayer.name" />
        <button @click="eliminate">Choose Who to Eliminate</button>
    </div>
</template>

<script>
import stage from '@/unlimited/mrwhite/stage.js';
import players from '@/unlimited/mrwhite/players.js';
import Profile from './Profile.vue';

export default {
    components: { Profile },
    computed: {
        currentPlayer: () => players.currentPlayer(),
        players: () => players.players()
    },
    methods: {
        eliminate() {
            stage.nextStage();
        }
    }
}
</script>

<style>
p {
    text-align: left;
}

</style>