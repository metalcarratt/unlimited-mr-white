<template>
    <div>
        <h2>Round Over</h2>
        <p>Winner is {{ winner }}</p>
        <p>Scores:</p>
        <div class="list">
            <Profile v-for="(player, pIndex) of players" :key="pIndex" :player="player" showScore="true" :shrink="true" />
        </div>
        <button @click="playAgain">Play again</button>
    </div>
</template>

<script>
import Profile from './Profile.vue';
import game from '@/unlimited/mrwhite/game.js';
import players from '@/unlimited/mrwhite/players.js';

export default {
    components: { Profile },
    computed: {
        winner: () => game.winner(),
        players: () => players.allPlayers() 
    },
    methods: {
        playAgain() {
            game.playAgain();
        }
    }
}
</script>