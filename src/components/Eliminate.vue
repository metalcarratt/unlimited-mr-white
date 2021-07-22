<template>
    <div>
        <h2>Eliminate</h2>
        <p>Choose who to eliminate:</p>
        <span v-for="(player, pIter) of players" :key="pIter" @click="eliminatePlayer(player)" class="clickme">
            <Profile  :player="player" />
        </span>
    </div>
</template>

<script>
import players from '@/unlimited/mrwhite/players.js';
import game from '@/unlimited/mrwhite/game.js';
import Profile from './Profile.vue';

export default {
    components: { Profile },
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

<style scoped>
.clickme {
    cursor: pointer;
}
</style>